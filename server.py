import http.server
import socketserver
import json
import os
import sys

PORT = 8000
DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'documents.json')

class CoffeeLabHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for flexible developer testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/documents':
            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.end_headers()
            try:
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, 'r', encoding='utf-8') as f:
                        data = f.read()
                    self.wfile.write(data.encode('utf-8'))
                else:
                    self.wfile.write(b'[]')
            except Exception as e:
                self.send_error(500, str(e))
        else:
            # Let standard HTTP server handle static files (index.html, style.css, app.js)
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/documents':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                new_doc = json.loads(post_data.decode('utf-8'))

                # Load existing documents
                documents = []
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, 'r', encoding='utf-8') as f:
                        try:
                            documents = json.load(f)
                        except json.JSONDecodeError:
                            documents = []

                # Assign dynamic sequential ID
                new_doc['id'] = str(max([int(doc.get('id', 0)) for doc in documents] + [0]) + 1)
                documents.append(new_doc)

                # Ensure directory structure exists
                os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

                # Save updated list with clean formatting and utf-8 support
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(documents, f, ensure_ascii=False, indent=2)

                self.send_response(201)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps(new_doc, ensure_ascii=False).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}, ensure_ascii=False).encode('utf-8'))
        else:
            self.send_error(404, "Not Found")

if __name__ == '__main__':
    # Force working directory to the file's folder so files serve correctly from double-clicks
    current_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(current_dir)
    
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    
    server_address = ('', PORT)
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(server_address, CoffeeLabHTTPHandler) as httpd:
        print(f"============================================================")
        print(f"*** ICCB Retro-Futuristic Coffee Lab Server is Running ***")
        print(f"============================================================")
        print(f" * Local URL:  http://localhost:{PORT}")
        print(f" * Serving directory: {current_dir}")
        print(f" * Press Ctrl+C to terminate...")
        print(f"============================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server. Have a perfect cup of coffee!")
            sys.exit(0)
