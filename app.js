/**
 * Ideal Coffee Chat Blog (ICCB) - Core Application Controller
 * Features:
 * - Single Page Application (SPA) Routing
 * - Netlify Identity Widget & Local Mock Auth Bridge
 * - Interactive "Coffee Alchemist" Extraction Simulator
 * - Document Editor (Google Docs style) with Real-time Markdown Preview
 * - Local Python Server Sync & LocalStorage persistence fallback
 */

// ==========================================================================
// 1. APPLICATION STATE & STATIC SEED DATA
// ==========================================================================
const SEED_DOCUMENTS = [
  {
    "id": "1",
    "title": "알코올과 카페인의 관능적 융합, 에스프레소 마티니 (Espresso Martini)",
    "category": "alcohol-jelly",
    "itemType": "주류 에스프레소",
    "author": "정구영",
    "role": "Chief Alchemist",
    "date": "2026-05-30",
    "tags": ["주류", "에스프레소", "에센셜"],
    "telemetry": {
      "temp": "91.5",
      "grind": "14",
      "ratio": "1:2.0",
      "time": "27",
      "rating": "4.9"
    },
    "content": "### 1. 아이디어 제안 배경\n주말 저녁, 진한 에스프레소의 에너지와 고급스러운 칵테일의 해방감을 한 번에 충족시키기 위해 고안되었습니다. 차가운 유리잔 위에 떠 있는 미세한 커피 크레마 거품과 보드카의 강렬한 스파이스의 결합을 모티브로 삼고 있습니다.\n\n### 2. 필수 구성 재료\n- 갓 추출한 에스프레소 더블 샷: 36g (에티오피아 예가체프 내추럴, 화사한 베리 향)\n- 프리미엄 보드카: 45ml\n- 깔루아 리큐르: 15ml\n- 슈가 시럽: 5ml\n- 쉐이킹용 얼음\n\n### 3. 브루잉 & 제조 레시피\n1. 마티니 글라스를 얼음물에 담가 0℃ 부근으로 급속 칠링합니다.\n2. 에스프레소 머신의 압력을 9.2bar로 세팅하고 27초간 36g의 더블 샷을 정밀 추출합니다.\n3. 쉐이커에 얼음을 채우고 보드카, 깔루아, 시럽, 그리고 뜨거운 상태의 에스프레소 샷을 순서대로 투입합니다.\n4. 에스프레소의 단백질 성분이 미세 공기와 결합해 탄탄한 폼을 형성할 수 있도록 10초간 빠르고 강력하게 쉐이킹합니다.\n5. 파인 스트레이너를 거쳐 글라스에 정교하게 따릅니다.\n6. 에스프레소 폼 위에 커피 원두 3알(건강, 부, 행복을 상징)을 삼각형 구도로 배치하여 가니쉬합니다.\n\n### 4. 테이스팅 노트 및 비평\n첫 터치에서는 달콤하고 부드러운 초콜릿 향의 벨벳 폼이 입술을 스치며, 이어 차가운 보드카의 깨끗함과 에스프레소의 화사한 과일 산미가 이중주를 이룹니다. 취미를 넘어 전문 에스프레소 바의 완성도 높은 시그니처 칵테일 메뉴로 손색이 없습니다.",
    "isLocked": false
  },
  {
    "id": "2",
    "title": "초록의 충격과 싱그러운 쾌감, 허브 고수 스무디 (Cilantro Green Smoothie)",
    "category": "fruit-veg",
    "itemType": "과일 & 채소 스무디",
    "author": "정구영",
    "role": "Botanical Alchemist",
    "date": "2026-05-30",
    "tags": ["비건", "허브 스무디", "디톡스"],
    "telemetry": {
      "temp": "4.0",
      "grind": "N/A",
      "ratio": "1:3.5",
      "time": "45",
      "rating": "4.6"
    },
    "content": "### 1. 아이디어 제안 배경\n대중적인 아보카도나 케일 스무디를 넘어선 독창적이고 충격적인 싱그러움을 찾기 위해 탄생했습니다. 고수(Cilantro)가 가진 특유의 은은한 시트러스 풍미를 사과와 바나나의 천연 당분으로 융합시켜, 고수 기피자조차 매료될 수 있는 정제된 초록의 에너지를 컵에 담아냅니다.\n\n### 2. 필수 구성 재료\n- 신선한 유기농 고수 잎: 30g (줄기 제외, 쓴맛 방지)\n- 그린 애플 (아오리 사과): 1/2개 (강력한 유기산 공급)\n- 완숙 바나나: 1개 (부드러운 바디감 및 단맛)\n- 착즙 레몬주스: 15ml\n- 아몬드 밀크 (Unsweetened): 120ml\n- 정제수 또는 얼음 조각: 80g\n\n### 3. 브루잉 & 제조 레시피\n1. 고수 잎은 찬 식초물에 5분간 소독한 후 탈수기를 이용해 물기를 완벽히 제거합니다.\n2. 그린 애플은 껍질째 깨끗이 씻어 적당한 크기로 깍둑썰기합니다.\n3. 고출력 블렌더 컨테이너 하단에 아몬드 밀크와 얼음을 먼저 넣고, 그 위에 사과, 바나나, 고수 잎을 층층이 쌓습니다.\n4. 블렌더의 수동 다이얼을 1단계부터 10단계까지 천천히 올려가며 입자가 보이지 않을 때까지 약 45초간 울트라 블렌딩합니다.\n5. 완성된 스무디를 글라스에 부어낸 후, 최상단에 어린 고수 잎 한 장과 얇게 썬 청사과 슬라이스를 가니쉬하여 산뜻한 비주얼을 살립니다.\n\n### 4. 테이스팅 노트 및 비평\n한 입 머금는 순간, 사과와 레몬의 산뜻한 산미가 지배적으로 다가오고 이어서 고수의 화사한 허벌 풍미가 시원하게 코끝을 관통합니다. 바나나와 아몬드 밀크의 너티함이 고수의 거친 풀 향을 부드럽게 감싸 안아 놀라운 조화를 보여줍니다. 아침에 마시는 웰니스 시그니처 드링크로 강력히 추천합니다.",
    "isLocked": false
  },
  {
    "id": "3",
    "title": "우주적 비주얼과 젤라틴 아트의 결정체, 별빛이 내리는 워터폴 케이크",
    "category": "specialty-cake",
    "itemType": "양갱 아트 케이크",
    "author": "정구영",
    "role": "Artisan Pâtissier",
    "date": "2026-05-31",
    "tags": ["아트케이크", "양갱", "글레이즈"],
    "telemetry": {
      "temp": "18.0",
      "grind": "N/A",
      "ratio": "1:1.2",
      "time": "180",
      "rating": "5.0"
    },
    "content": "### 1. 아이디어 제안 배경\n전통 디저트인 양갱(Aagar Jelly)을 현대적인 베이킹 기술과 융합하여 '먹을 수 있는 우주 예술(Cosmic Edible Art)'을 시각화하고자 했습니다. 맑고 투명한 한천 젤리 내부에 금박과 그라데이션 푸른빛을 심어 은하수가 쏟아지는 절벽의 폭포를 케이크 위에 형상화한 시그니처 디저트입니다.\n\n### 2. 필수 구성 재료\n- **우주 한천 레이어**: 실한천 분말 6g, 설탕 40g, 물 300ml, 천연 청색/자색 색소, 식용 금박 가루\n- **요거트 크림 무스 바디**: 플레인 요거트 200g, 생크림 150g, 판젤라틴 6g, 설탕 50g\n- **시트 코코넛 비스킷**: 다진 다이제스트 쿠키 80g, 녹인 버터 35g, 코코넛 슬라이스 15g\n\n### 3. 브루잉 & 제조 레시피\n1. 다진 쿠키와 녹인 버터, 코코넛을 섞어 무스 링 바닥에 단단히 눌러 다진 후 냉동고에서 20분간 굳힙니다.\n2. 요거트와 생크림, 설탕을 섞고 불린 젤라틴을 따뜻하게 녹여 결합하여 무스 베이스를 만듭니다. 이를 비스킷 시트 위에 붓고 2시간 동안 냉장 경화시킵니다.\n3. 냄비에 물, 한천 가루, 설탕을 넣고 끓여 한천 액을 제조한 뒤 3개의 그릇에 나누어 청색, 자색 그라데이션 색상을 조색합니다.\n4. 무스 바디의 상단에 파도를 형상화해 조각을 낸 후, 식용 금박 가루와 조색된 한천 액을 정교한 층상 구조로 부어 나가며 우주와 별빛 폭포를 표현합니다.\n5. 마지막 투명 한천 레이어를 부어 코팅한 뒤 180분간 냉각하여 광택을 고정합니다.\n\n### 4. 테이스팅 노트 및 비평\n부드럽고 새콤달콤한 요거트 무스의 텍스처와, 상단의 쫀득하고 탱글한 양갱 젤리층이 입안에서 대조적인 재미를 제공합니다. 입안 가득 감도는 코코넛 시트의 고소함과 한천의 깔끔한 단맛이 품위 있게 어우러집니다. 카페 창업 시 윈도우 쇼케이스의 중심을 차지할 시각적 하이라이트 아이템입니다.",
    "isLocked": false
  }
];

const state = {
  documents: [],
  currentCategory: 'home',
  activeView: 'home',
  selectedDocId: null,
  user: null, // Stores { email, name, role }
  isLocalServer: false
};

// ==========================================================================
// 2. DOM ELEMENTS CACHE
// ==========================================================================
const DOM = {
  themeToggle: document.getElementById('themeToggleBtn'),
  loginBtn: document.getElementById('loginBtn'),
  userStatus: document.getElementById('userStatus'),
  categoryTabs: document.querySelectorAll('.category-tab'),
  viewSections: document.querySelectorAll('.view-section'),
  
  // Views
  homeView: document.getElementById('view-home'),
  feedView: document.getElementById('view-feed'),
  detailView: document.getElementById('view-detail'),
  writeView: document.getElementById('view-write'),
  
  // Documents Listing
  feedTitle: document.getElementById('feed-title'),
  feedSubtitle: document.getElementById('feed-subtitle'),
  documentGrid: document.getElementById('document-grid'),
  writeDocBtn: document.getElementById('writeDocBtn'),
  
  // Article detail
  articleContainer: document.getElementById('article-container'),
  backToFeedBtn: document.getElementById('backToFeedBtn'),
  
  // Interactive Simulator
  simGrind: document.getElementById('sim-grind'),
  simRatio: document.getElementById('sim-ratio'),
  simTemp: document.getElementById('sim-temp'),
  valGrind: document.getElementById('val-grind'),
  valRatio: document.getElementById('val-ratio'),
  valTemp: document.getElementById('val-temp'),
  pullShotBtn: document.getElementById('pullShotBtn'),
  espressoStream: document.getElementById('espressoStream'),
  cupLiquid: document.getElementById('cupLiquid'),
  steamParticle: document.getElementById('steamParticle'),
  simStatus: document.getElementById('sim-status'),
  simTime: document.getElementById('sim-time'),
  simQuality: document.getElementById('sim-quality'),
  extractionReport: document.getElementById('extractionReport'),
  reportTitleText: document.getElementById('report-title-text'),
  reportDesc: document.getElementById('report-desc'),
  createFromExtractionBtn: document.getElementById('createFromExtractionBtn'),
  
  // Form Editor
  docForm: document.getElementById('docForm'),
  editorTitle: document.getElementById('editor-title'),
  editorContent: document.getElementById('editor-content'),
  editorCategory: document.getElementById('editor-category'),
  editorItemType: document.getElementById('editor-item-type'),
  editorTags: document.getElementById('editor-tags'),
  editorGrind: document.getElementById('editor-grind'),
  editorTemp: document.getElementById('editor-temp'),
  editorRatio: document.getElementById('editor-ratio'),
  editorTime: document.getElementById('editor-time'),
  editorRating: document.getElementById('editor-rating'),
  previewTitle: document.getElementById('preview-title'),
  previewCategory: document.getElementById('preview-category'),
  previewType: document.getElementById('preview-type'),
  previewTelemetry: document.getElementById('preview-telemetry'),
  previewBody: document.getElementById('preview-body'),
  cancelWriteBtn: document.getElementById('cancelWriteBtn'),
  
  // Authentication Modal
  authModal: document.getElementById('authModal'),
  authCloseBtn: document.getElementById('authCloseBtn'),
  authTabBtns: document.querySelectorAll('.auth-tab-btn'),
  authSubmitBtn: document.getElementById('authSubmitBtn'),
  authEmail: document.getElementById('authEmail'),
  authPass: document.getElementById('authPass'),
  authNameGroup: document.getElementById('authNameGroup'),
  authName: document.getElementById('authName'),
  authRoleGroup: document.getElementById('authRoleGroup'),
  authRole: document.getElementById('authRole'),
  toastContainer: document.getElementById('toastContainer')
};

// ==========================================================================
// 3. INITIALIZATION & SERVER PROBING
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  checkLocalServerConnection();
  initAuthentication();
  initRouter();
  initExtractionSimulator();
  initFormEditor();
});

// Detect theme preference or fallback to system
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonIcon(savedTheme);
  
  DOM.themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButtonIcon(newTheme);
    showToast(`🌗 ${newTheme === 'dark' ? 'Vintage Roast' : 'Classic Crema'} 테마 활성화`, 'success');
  });
}

function updateThemeButtonIcon(theme) {
  DOM.themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// Probes if the Python http server API endpoints are online
async function checkLocalServerConnection() {
  try {
    const res = await fetch('/api/documents');
    if (res.ok) {
      state.isLocalServer = true;
      console.log("⚡ ICCB Local Python server connected. Synchronizing JSON database.");
    }
  } catch (err) {
    state.isLocalServer = false;
    console.warn("⚠️ Standalone mode: Local python API server not found. Falling back to browser LocalStorage.");
  }
  
  await fetchDocuments();
}

// Fetch documents from Server API or fall back to local storage
async function fetchDocuments() {
  if (state.isLocalServer) {
    try {
      const res = await fetch('/api/documents');
      state.documents = await res.json();
    } catch (err) {
      console.error("Failed to fetch from server database, using fallback.", err);
      loadFromLocalStorage();
    }
  } else {
    loadFromLocalStorage();
  }
  
  // Render feed if looking at a category
  if (state.activeView === 'feed') {
    renderDocumentFeed();
  }
  
  updateAuthorStats();
}

function loadFromLocalStorage() {
  const localDocs = localStorage.getItem('iccb_docs');
  if (localDocs) {
    state.documents = JSON.parse(localDocs);
  } else {
    // Initial Seed for new users
    state.documents = [...SEED_DOCUMENTS];
    localStorage.setItem('iccb_docs', JSON.stringify(state.documents));
  }
}

// Save document either to Python backend or LocalStorage
async function saveDocument(newDoc) {
  if (state.isLocalServer) {
    try {
      const res = await fetch('/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDoc)
      });
      if (res.ok) {
        const savedDoc = await res.ok ? await res.json() : newDoc;
        state.documents.push(savedDoc);
        showToast("💾 파이썬 로컬 서버 데이터베이스(JSON) 동기화 완료!", "success");
      } else {
        throw new Error("Server rejected save");
      }
    } catch (err) {
      console.error("Server save failed. Saving locally.", err);
      saveToLocalStorage(newDoc);
    }
  } else {
    saveToLocalStorage(newDoc);
  }
  
  updateAuthorStats();
}

function saveToLocalStorage(newDoc) {
  newDoc.id = String(Date.now());
  state.documents.push(newDoc);
  localStorage.setItem('iccb_docs', JSON.stringify(state.documents));
  showToast("💾 브라우저 로컬 저장소(LocalStorage)에 영구 저장되었습니다.", "success");
}

function updateAuthorStats() {
  const docCount = state.documents.length;
  const totalRating = state.documents.reduce((acc, doc) => acc + parseFloat(doc.telemetry.rating || 0), 0);
  const avgRating = docCount > 0 ? (totalRating / docCount).toFixed(1) : "0.0";
  
  const countEl = document.getElementById('stat-posts-count');
  const ratingEl = document.getElementById('stat-avg-rating');
  if (countEl) countEl.innerText = docCount;
  if (ratingEl) ratingEl.innerText = avgRating;
}

// ==========================================================================
// 4. NETLIFY IDENTITY & CUSTOM LOCAL AUTHENTICATION BRIDGE
// ==========================================================================
function initAuthentication() {
  // Check if Netlify Identity Widget script loaded successfully
  if (window.netlifyIdentity) {
    console.log("🔒 Netlify Identity loaded. Activating production SSO logins.");
    
    // Bind Netlify Identity Events
    netlifyIdentity.on('init', user => {
      if (user) {
        handleUserLogin(user.email, user.user_metadata?.full_name || user.email, "Netlify User");
      }
    });
    
    netlifyIdentity.on('login', user => {
      handleUserLogin(user.email, user.user_metadata?.full_name || user.email, "Netlify Alchemist");
      netlifyIdentity.close();
      showToast(`🔑 ${user.email} 로그인 성공 (Netlify)`, "success");
    });
    
    netlifyIdentity.on('logout', () => {
      handleUserLogout();
      showToast("🔒 로그아웃 되었습니다.", "success");
    });

    DOM.loginBtn.addEventListener('click', () => {
      netlifyIdentity.open();
    });
  } else {
    // FALLBACK: Elegant Mock Auth modal for local/standalone development
    console.log("🔑 Offline Mode: Netlify Widget missing. Triggering Custom Mock Auth Bridge.");
    
    const localUser = localStorage.getItem('iccb_user');
    if (localUser) {
      state.user = JSON.parse(localUser);
      updateUserUIElements();
    }
    
    DOM.loginBtn.addEventListener('click', () => {
      if (state.user) {
        handleUserLogout();
      } else {
        openAuthModal();
      }
    });
    
    initMockAuthModalHandlers();
  }
}

function handleUserLogin(email, name, role) {
  state.user = { email, name, role };
  localStorage.setItem('iccb_user', JSON.stringify(state.user));
  updateUserUIElements();
}

function handleUserLogout() {
  state.user = null;
  localStorage.removeItem('iccb_user');
  if (window.netlifyIdentity) {
    netlifyIdentity.logout();
  }
  updateUserUIElements();
  showToast("🔓 안전하게 로그아웃되었습니다.", "success");
}

function updateUserUIElements() {
  if (state.user) {
    DOM.loginBtn.innerText = "로그아웃";
    DOM.loginBtn.className = "btn btn-secondary";
    DOM.userStatus.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span class="user-indicator" style="width: 8px; height: 8px; background: var(--accent-botanical); border-radius: 50%; display: inline-block; box-shadow: 0 0 8px var(--accent-botanical);"></span>
        <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">${state.user.name} (${state.user.role})</span>
      </div>
    `;
    if (DOM.writeDocBtn) DOM.writeDocBtn.style.display = 'inline-flex';
  } else {
    DOM.loginBtn.innerText = "로그인 / 가입";
    DOM.loginBtn.className = "btn btn-primary";
    DOM.userStatus.innerHTML = `
      <span style="font-size: 0.8rem; color: var(--text-muted);">☕ 로그인 후 영감을 올려보세요</span>
    `;
    if (DOM.writeDocBtn) DOM.writeDocBtn.style.display = 'none';
  }
}

// Custom Mock Modal functions
let activeAuthTab = 'login';

function openAuthModal() {
  DOM.authModal.classList.add('active');
  switchAuthTab('login');
}

function closeAuthModal() {
  DOM.authModal.classList.remove('active');
}

function switchAuthTab(tab) {
  activeAuthTab = tab;
  DOM.authTabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  
  if (tab === 'login') {
    DOM.authNameGroup.style.display = 'none';
    DOM.authRoleGroup.style.display = 'none';
    DOM.authSubmitBtn.innerText = "로그인";
  } else {
    DOM.authNameGroup.style.display = 'flex';
    DOM.authRoleGroup.style.display = 'flex';
    DOM.authSubmitBtn.innerText = "바리스타 등록";
  }
}

function initMockAuthModalHandlers() {
  DOM.authCloseBtn.addEventListener('click', closeAuthModal);
  DOM.authModal.addEventListener('click', (e) => {
    if (e.target === DOM.authModal) closeAuthModal();
  });
  
  DOM.authTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchAuthTab(btn.dataset.tab);
    });
  });
  
  DOM.authSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = DOM.authEmail.value.trim();
    const pass = DOM.authPass.value.trim();
    const name = DOM.authName.value.trim() || email.split('@')[0];
    const role = DOM.authRole.value;
    
    if (!email || !pass) {
      showToast("❌ 이메일과 비밀번호를 작성해주세요.", "error");
      return;
    }
    
    if (activeAuthTab === 'login') {
      // Mock Login Successful
      handleUserLogin(email, name || "정구영", "바리스타 연구원");
      showToast(`🔑 환영합니다, ${name}님!`, "success");
    } else {
      // Mock signup
      handleUserLogin(email, name, role);
      showToast(`🌟 신규 바리스타 연구원 ${name} 등록이 완료되었습니다.`, "success");
    }
    
    closeAuthModal();
    // Clear inputs
    DOM.authEmail.value = '';
    DOM.authPass.value = '';
    DOM.authName.value = '';
  });
}

// ==========================================================================
// 5. SPA ROUTING ENGINE
// ==========================================================================
function initRouter() {
  DOM.categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      
      // Update active nav state
      DOM.categoryTabs.forEach(t => t.classList.toggle('active', t === tab));
      
      switchSection(category);
    });
  });
  
  DOM.writeDocBtn.addEventListener('click', () => {
    if (!state.user) {
      showToast("🔒 문서 작성은 로그인 후에 가능합니다.", "error");
      openAuthModal();
      return;
    }
    
    // Clear form and open editor
    DOM.docForm.reset();
    state.selectedDocId = null;
    
    // Autofill current details if any
    DOM.editorTime.value = "30";
    DOM.editorRating.value = "4.8";
    
    switchSection('write');
  });
  
  DOM.cancelWriteBtn.addEventListener('click', () => {
    if (confirm("작성 중인 문서 내용이 모두 유실됩니다. 취소하시겠습니까?")) {
      goBackToPreviousView();
    }
  });
  
  DOM.backToFeedBtn.addEventListener('click', () => {
    goBackToPreviousView();
  });
}

function switchSection(targetKey) {
  state.currentCategory = targetKey;
  
  // Hide all sections first
  DOM.viewSections.forEach(section => {
    section.classList.remove('active');
  });
  
  let targetView = 'home';
  if (['alcohol-jelly', 'fruit-veg', 'specialty-cake'].includes(targetKey)) {
    targetView = 'feed';
  } else if (targetKey === 'write') {
    targetView = 'write';
  } else if (targetKey === 'detail') {
    targetView = 'detail';
  }
  
  state.activeView = targetView;
  
  // Prepare contents for specific views
  if (targetView === 'feed') {
    renderDocumentFeed();
  }
  
  // Activate DOM section with subtle micro-transition delay
  setTimeout(() => {
    const targetDOM = document.getElementById(`view-${targetView}`);
    if (targetDOM) {
      targetDOM.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 50);
}

function goBackToPreviousView() {
  // Restores active view to Category bar context
  const activeTab = document.querySelector('.category-tab.active');
  if (activeTab) {
    switchSection(activeTab.dataset.category);
  } else {
    switchSection('home');
  }
}

// Render filtered card list based on category
function renderDocumentFeed() {
  const category = state.currentCategory;
  const filtered = state.documents.filter(doc => doc.category === category);
  
  // Setup Titles
  if (category === 'alcohol-jelly') {
    DOM.feedTitle.innerHTML = `🔬 <span>Alchemy Lab</span> : 에스프레소 연금술`;
    DOM.feedSubtitle.innerText = "주류 에스프레소(마티니, 깔루아) 및 젤라틴 한천 에스프레소 젤리 융합 레시피 리서치";
  } else if (category === 'fruit-veg') {
    DOM.feedTitle.innerHTML = `🌿 <span>Botanical Lab</span> : 자연주의 브루잉`;
    DOM.feedSubtitle.innerText = "고수, 트러플, 두리안, 말차 등 신선한 채소/과일을 배합한 초감각 스무디 및 케이크 아카이브";
  } else if (category === 'specialty-cake') {
    DOM.feedTitle.innerHTML = `🎨 <span>Patisserie Lab</span> : 특색 케이크 미학`;
    DOM.feedSubtitle.innerText = "하늘정원 케이크, 워터폴 케이크 등 비주얼 아트와 풍미의 결합을 연구하는 제과 아틀리에";
  }
  
  DOM.documentGrid.innerHTML = '';
  
  if (filtered.length === 0) {
    DOM.documentGrid.innerHTML = `
      <div class="feed-empty">
        <div class="empty-icon">🧪</div>
        <h3>이 실험 카테고리는 아직 비어 있습니다.</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">당신만의 혁신적인 커피 배합 실험을 작성해 등록하는 첫 번째 알케미스트가 되어보세요!</p>
        ${state.user ? '<button onclick="triggerNewDocFromEmptyFeed()" class="btn btn-primary">🧪 첫 브루잉 문서 등록</button>' : '<button onclick="openAuthModal()" class="btn btn-secondary">🔑 로그인하고 브루잉 시작</button>'}
      </div>
    `;
    return;
  }
  
  filtered.forEach(doc => {
    const excerpt = doc.content
      .replace(/[#*`\-]/g, '') // remove markdown characters
      .substring(0, 100) + '...';
      
    const card = document.createElement('div');
    card.className = 'doc-card';
    
    // Select styling badge colors based on chemistry vibe
    let badgeColor = 'var(--accent)';
    if (doc.category === 'alcohol-jelly') badgeColor = 'var(--accent-glow)';
    if (doc.category === 'fruit-veg') badgeColor = 'var(--accent-botanical)';
    if (doc.category === 'specialty-cake') badgeColor = 'var(--accent-warm)';
    
    let cardImageHtml = '';
    if (doc.id === '1') {
      cardImageHtml = `<div style="height: 140px; overflow: hidden; margin: -25px -25px 15px -25px; border-radius: 12px 12px 0 0;"><img src="assets/espresso_martini.png" alt="" style="width: 100%; height: 100%; object-fit: cover;"></div>`;
    } else if (doc.id === '2') {
      cardImageHtml = `<div style="height: 140px; overflow: hidden; margin: -25px -25px 15px -25px; border-radius: 12px 12px 0 0;"><img src="assets/green_smoothie.png" alt="" style="width: 100%; height: 100%; object-fit: cover;"></div>`;
    } else if (doc.id === '3') {
      cardImageHtml = `<div style="height: 140px; overflow: hidden; margin: -25px -25px 15px -25px; border-radius: 12px 12px 0 0;"><img src="assets/waterfall_cake.png" alt="" style="width: 100%; height: 100%; object-fit: cover;"></div>`;
    }
    
    card.innerHTML = `
      ${cardImageHtml}
      <span class="doc-card-badge" style="color: ${badgeColor}; border-color: ${badgeColor}">${doc.itemType}</span>
      <div class="doc-meta" style="margin-top: ${cardImageHtml ? '10px' : '0px'}">// Lab ID #${doc.id}</div>
      <h3 class="doc-title">${escapeHtml(doc.title)}</h3>
      <p class="doc-excerpt">${escapeHtml(excerpt)}</p>
      
      <div class="doc-telemetry-strip">
        <div class="tel-box">
          <span class="tel-val">${doc.telemetry.temp}°C</span>
          <span class="tel-lbl">Temp</span>
        </div>
        <div class="tel-box">
          <span class="tel-val">#${doc.telemetry.grind}</span>
          <span class="tel-lbl">Grind</span>
        </div>
        <div class="tel-box">
          <span class="tel-val">${doc.telemetry.ratio}</span>
          <span class="tel-lbl">Ratio</span>
        </div>
        <div class="tel-box">
          <span class="tel-val">${doc.telemetry.time}s</span>
          <span class="tel-lbl">Time</span>
        </div>
      </div>
      
      <div class="doc-footer">
        <div class="doc-author-info">
          <div class="doc-author-avatar">🧑‍🔬</div>
          <div>
            <div class="doc-author-name">${escapeHtml(doc.author)}</div>
            <div style="font-size: 0.65rem; color: var(--text-muted);">${escapeHtml(doc.role || 'Barista')}</div>
          </div>
        </div>
        <span class="doc-card-date">${doc.date}</span>
      </div>
    `;
    
    card.addEventListener('click', () => {
      viewDocumentDetail(doc.id);
    });
    
    DOM.documentGrid.appendChild(card);
  });
}

// Expose trigger globally so the dynamic empty feed buttons work
window.triggerNewDocFromEmptyFeed = () => {
  DOM.writeDocBtn.click();
};

// Opens individual document view
function viewDocumentDetail(id) {
  const doc = state.documents.find(d => d.id === id);
  if (!doc) return;
  
  state.selectedDocId = id;
  switchSection('detail');
  
  let categoryLabel = 'Alchemy Lab';
  if (doc.category === 'fruit-veg') categoryLabel = 'Botanical Lab';
  if (doc.category === 'specialty-cake') categoryLabel = 'Patisserie Lab';
  
  DOM.articleContainer.innerHTML = `
    <article>
      <div class="article-header">
        <span class="article-category-badge">// ${categoryLabel} > ${doc.itemType}</span>
        <h1 class="article-title">${escapeHtml(doc.title)}</h1>
        
        <div class="article-meta-row">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="profile-avatar" style="width: 45px; height: 45px; margin-bottom: 0; font-size: 1.5rem;">🧑‍🔬</div>
            <div>
              <div style="font-weight: bold; font-size: 0.95rem;">${escapeHtml(doc.author)}</div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-glow);">${escapeHtml(doc.role || 'Barista')}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">제출일자 : ${doc.date}</div>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent);">실험 레포트 일련번호: #${doc.id}</div>
          </div>
        </div>
      </div>
      
      <div class="article-dashboard">
        <div class="dash-node">
          <span class="dash-lbl">추출 온도</span>
          <span class="dash-val">${doc.telemetry.temp}°C</span>
        </div>
        <div class="dash-node">
          <span class="dash-lbl">분쇄 크기</span>
          <span class="dash-val">#${doc.telemetry.grind}</span>
        </div>
        <div class="dash-node">
          <span class="dash-lbl">에스프레소 비율</span>
          <span class="dash-val">${doc.telemetry.ratio}</span>
        </div>
        <div class="dash-node">
          <span class="dash-lbl">브루잉 타임</span>
          <span class="dash-val">${doc.telemetry.time}초</span>
        </div>
        <div class="dash-node">
          <span class="dash-lbl">실험 만족도</span>
          <span class="dash-val">⭐ ${doc.telemetry.rating}</span>
        </div>
      </div>
      
      <div class="article-content">
        ${parseMarkdown(doc.content)}
      </div>
      
      <div class="article-actions-bottom">
        <button onclick="printLaboratoryReport()" class="btn btn-secondary">🖨️ 실험 보고서 인쇄 (PDF)</button>
        ${state.user && state.user.name === doc.author ? `<button onclick="deleteDocument('${doc.id}')" class="btn" style="border-color: var(--accent-warm); color: var(--accent-warm);">🗑️ 레포트 폐기</button>` : ''}
      </div>
    </article>
  `;
}

// Print/Export Lab Report
window.printLaboratoryReport = () => {
  window.print();
};

// Delete document
window.deleteDocument = async (id) => {
  if (!confirm("정말로 이 실험 레포트를 영구 폐기하시겠습니까? 되돌릴 수 없습니다.")) return;
  
  if (state.isLocalServer) {
    showToast("⚠️ 로컬 서버 연동 중에는 직접 삭제가 불가능하거나 로컬 디스크 파일 수정이 권장됩니다. 브라우저 리로드 시 복구될 수 있습니다.", "error");
  }
  
  state.documents = state.documents.filter(d => d.id !== id);
  localStorage.setItem('iccb_docs', JSON.stringify(state.documents));
  showToast("🗑️ 문서가 삭제되었습니다.", "success");
  goBackToPreviousView();
};

// ==========================================================================
// 6. INTERACTIVE COFFEE EXTRACTION SIMULATOR GAME
// ==========================================================================
let isExtracting = false;

function initExtractionSimulator() {
  // Bind input sliders to telemetry text values
  DOM.simGrind.addEventListener('input', () => {
    DOM.valGrind.innerText = `#${DOM.simGrind.value}`;
  });
  
  DOM.simRatio.addEventListener('input', () => {
    DOM.valRatio.innerText = `1:${parseFloat(DOM.simRatio.value).toFixed(1)}`;
  });
  
  DOM.simTemp.addEventListener('input', () => {
    DOM.valTemp.innerText = `${DOM.simTemp.value}°C`;
  });
  
  DOM.pullShotBtn.addEventListener('click', triggerShotExtraction);
  DOM.createFromExtractionBtn.addEventListener('click', autoCreateRecipeFromSimulator);
}

function triggerShotExtraction() {
  if (isExtracting) return;
  isExtracting = true;
  
  // UI reset
  DOM.pullShotBtn.disabled = true;
  DOM.pullShotBtn.innerText = "☕ 추출 압력 가압 중...";
  DOM.espressoStream.style.opacity = 0;
  DOM.cupLiquid.style.height = '0%';
  DOM.extractionReport.classList.remove('show');
  
  // Telemetry screen ticks
  let currentSec = 0;
  DOM.simStatus.innerText = "READY";
  DOM.simTime.innerText = "0s";
  DOM.simQuality.innerText = "---";
  
  // Extraction parameters
  const grind = parseInt(DOM.simGrind.value);
  const ratio = parseFloat(DOM.simRatio.value);
  const temp = parseInt(DOM.simTemp.value);
  
  // Math modeling for dynamic brewing time (based on grind & ratio)
  // Fine grind = long extraction, coarse = fast extraction
  const targetExtractionTime = Math.max(12, Math.round((grind * -1.2) + (ratio * 15) + (temp * 0.1)));
  
  // Steam effect activation
  DOM.steamParticle.style.animation = 'steam-rise 1.5s infinite ease-out';
  
  let currentProgress = 0;
  const intervalTime = 100; // ms
  const totalTicks = targetExtractionTime * 10;
  
  setTimeout(() => {
    DOM.simStatus.innerText = "EXTRACTING";
    DOM.espressoStream.classList.add('extracting');
    
    const extractionInterval = setInterval(() => {
      currentProgress++;
      currentSec = (currentProgress / 10).toFixed(1);
      
      // Update screen telemetry
      DOM.simTime.innerText = `${currentSec}s`;
      
      // Dynamic color shift based on extraction progress (crema gets lighter)
      const ratioProgress = currentProgress / totalTicks;
      DOM.cupLiquid.style.height = `${ratioProgress * 90}%`;
      
      if (currentProgress >= totalTicks) {
        clearInterval(extractionInterval);
        endShotExtraction(grind, ratio, temp, targetExtractionTime);
      }
    }, intervalTime);
  }, 1000);
}

function endShotExtraction(grind, ratio, temp, time) {
  isExtracting = false;
  DOM.pullShotBtn.disabled = false;
  DOM.pullShotBtn.innerText = "🧪 시그니처 샷 추출 (Pull Shot)";
  DOM.espressoStream.classList.remove('extracting');
  DOM.steamParticle.style.animation = 'none';
  DOM.simStatus.innerText = "COMPLETE";
  
  // EVALUATE CHEMISTRY QUALITY (THE ALCHEMY METRIC)
  let rating = 5.0;
  let title = "";
  let description = "";
  
  // Ideal range: grind 10-16, temp 90-95, ratio 1.8-2.5, time 23-32s
  const isGrindPerfect = (grind >= 10 && grind <= 16);
  const isTempPerfect = (temp >= 90 && temp <= 95);
  const isRatioPerfect = (ratio >= 1.8 && ratio <= 2.5);
  
  if (isGrindPerfect && isTempPerfect && isRatioPerfect) {
    rating = (4.8 + Math.random() * 0.2).toFixed(1);
    title = "🌟 황금빛 크레마의 신의 샷 (God Shot)";
    description = `분쇄 크기(#${grind}), 에스프레소 비율(1:${ratio.toFixed(1)}), 온도(${temp}°C)의 상호작용이 완벽한 열역학적 평형을 이루었습니다. 화사하고 쫀득한 Crema 폼층 아래 초콜릿의 묵직한 당도와 베리의 우아한 산미가 정점을 이룹니다. 시그니처 음료 창작을 위한 극상의 에스프레소입니다!`;
    DOM.simQuality.innerText = "EXCELLENT";
    DOM.simQuality.style.color = "var(--accent-botanical)";
  } else if (grind < 10) {
    // Too Fine -> Over-extracted
    rating = (3.2 + Math.random() * 0.8).toFixed(1);
    title = "🔥 과다 추출 및 가혹한 쓴맛 (Over-extracted)";
    description = `분쇄도가 너무 가늘어(#${grind}) 채널링 현상이 발생했고, 추출 시간(${time}초)이 지나치게 길어져 떫고 불쾌한 카카오의 탄 맛과 잡미가 가득 흘러나왔습니다. 물의 온도를 낮추거나 분쇄 입자를 조금 더 굵게 설정해 보세요.`;
    DOM.simQuality.innerText = "BITTER";
    DOM.simQuality.style.color = "var(--accent-warm)";
  } else if (grind > 20) {
    // Too Coarse -> Under-extracted
    rating = (2.8 + Math.random() * 0.9).toFixed(1);
    title = "💧 과소 추출 및 강렬한 신맛 (Under-extracted)";
    description = `원두가 너무 굵어(#${grind}) 뜨거운 물이 저항을 받지 못하고 그대로 흘러내렸습니다(${time}초 추출). 에스프레소 특유의 풍부한 오일 성분과 당질이 추출되지 못해 묽고 찌르는 듯한 날카로운 시트러스 신맛만 남았습니다. 더 고운 분쇄도가 요구됩니다.`;
    DOM.simQuality.innerText = "SOUR";
    DOM.simQuality.style.color = "var(--accent-glow)";
  } else if (temp < 88) {
    // Low Temp -> Sour
    rating = (3.5 + Math.random() * 0.5).toFixed(1);
    title = "❄️ 미온 추출로 인한 바디감 부족 (Thermal Deficit)";
    description = `헤드 온도(${temp}°C)가 충분치 않아 원두 가루 내부의 아로마 에센스가 녹아 나오지 못했습니다. 미온수로 추출되어 크레마 색상이 옅고 거품이 빠르게 소실되며, 입안에서 느껴지는 질감이 워터리합니다. 온도를 92도 이상으로 올려주세요.`;
    DOM.simQuality.innerText = "FLAT";
    DOM.simQuality.style.color = "var(--text-muted)";
  } else {
    // Moderate Shot
    rating = (4.0 + Math.random() * 0.6).toFixed(1);
    title = "☕ 무난하고 대중적인 에스프레소 (Standard Crema)";
    description = `적절히 훌륭한 밸런스를 맞췄으나 미세한 조정이 가능합니다. 단맛을 높이기 위해 분쇄 밀도를 조율하거나, 추출 온도를 1도 단위로 정밀 조작해 보시면 God Shot의 반열에 오를 수 있습니다.`;
    DOM.simQuality.innerText = "BALANCED";
    DOM.simQuality.style.color = "var(--accent)";
  }
  
  // Keep calculated telemetry in simulator state to create recipe
  state.lastSimResults = { grind, ratio: `1:${ratio.toFixed(1)}`, temp, time, rating };
  
  // Render report pane
  DOM.reportTitleText.innerText = title;
  DOM.reportDesc.innerText = description;
  DOM.extractionReport.classList.add('show');
  
  showToast("🧪 추출 시뮬레이션 및 성분 분석 완료!", "success");
}

function autoCreateRecipeFromSimulator() {
  if (!state.lastSimResults) return;
  if (!state.user) {
    showToast("🔒 문서를 생성하려면 먼저 바리스타로 로그인해 주세요.", "error");
    openAuthModal();
    return;
  }
  
  const sim = state.lastSimResults;
  
  // Auto switch to Editor and fill details
  DOM.docForm.reset();
  DOM.editorTitle.value = `[실험 로그] ${sim.rating >= 4.8 ? '극상의 God Shot을 적용한 ' : ''}에스프레소 바 시그니처 메뉴 제안`;
  DOM.editorCategory.value = 'alcohol-jelly';
  DOM.editorItemType.value = '주류 에스프레소';
  DOM.editorGrind.value = sim.grind;
  DOM.editorTemp.value = sim.temp;
  DOM.editorRatio.value = sim.ratio;
  DOM.editorTime.value = sim.time;
  DOM.editorRating.value = sim.rating;
  
  DOM.editorContent.value = `### 1. 아이디어 제안 배경
추출 시뮬레이터에서 획득한 평점 ${sim.rating}점의 특수 에스프레소 샷 데이터를 기반으로, 신규 시그니처 커피 음료 창업 레시피를 제안합니다.

### 2. 브루잉 조건 (Telemetry)
- **분쇄 입도**: #${sim.grind}
- **추출 온도**: ${sim.temp}°C
- **에스프레소 비율**: ${sim.ratio}
- **추출 타임**: ${sim.time}초

### 3. 필수 재료 구성 및 배합 비율
- 에스프레소 시뮬레이티드 샷: 1잔 (36g)
- [여기에 음료의 특징이 되는 시크릿 재료를 작성하세요] (예: 베일리스 라떼 리큐어 20ml, 아이리쉬 시럽 10ml)
- 가니쉬: 미세 오렌지 제스트

### 4. 제조 가이드 및 기대평
1. 추출 다이얼을 시뮬레이션 값과 일치하게 세팅하고 샷을 추출합니다.
2. 컵의 벽면에 시럽 및 베이스 음료를 우아한 나선 무늬로 뿌려줍니다.
3. 샷을 조심스럽게 푸어링하여 선명한 크레마 그라데이션 레이어를 형성합니다.
4. 테이스터들에게 우주적 비주얼과 압도적인 관능 피드백을 전달할 준비를 합니다.`;

  updateLivePreview();
  switchSection('write');
  showToast("📋 시뮬레이터 브루잉 정보가 에디터에 자동 바인딩되었습니다.", "success");
}

// ==========================================================================
// 7. FORM EDITOR & REAL-TIME PREVIEW SYSTEM (Google Docs style)
// ==========================================================================
function initFormEditor() {
  // Connect live inputs to trigger render preview
  const inputs = [DOM.editorTitle, DOM.editorContent, DOM.editorCategory, DOM.editorItemType, DOM.editorGrind, DOM.editorTemp, DOM.editorRatio, DOM.editorTime, DOM.editorRating, DOM.editorTags];
  inputs.forEach(input => {
    input.addEventListener('input', updateLivePreview);
  });
  
  DOM.docForm.addEventListener('submit', handleFormSubmit);
}

function updateLivePreview() {
  const title = DOM.editorTitle.value.trim() || "지정되지 않은 실험 보고서 제목";
  const cat = DOM.editorCategory.value;
  const itemType = DOM.editorItemType.value;
  const grind = DOM.editorGrind.value || "N/A";
  const temp = DOM.editorTemp.value || "N/A";
  const ratio = DOM.editorRatio.value || "N/A";
  const time = DOM.editorTime.value || "N/A";
  const rating = DOM.editorRating.value || "0.0";
  const tagsStr = DOM.editorTags.value.trim();
  const content = DOM.editorContent.value.trim() || "*이곳에 마크다운 문법으로 레시피 및 아이디어를 작성하면 실시간 프린트 프리뷰가 활성화됩니다.*";
  
  DOM.previewTitle.innerText = title;
  DOM.previewCategory.innerText = `// Category: ${cat.toUpperCase()}`;
  DOM.previewType.innerText = `Type: ${itemType}`;
  
  // Format tags
  const tags = tagsStr ? tagsStr.split(',').map(t => `#${t.trim()}`).join(' ') : '#Brewing #Artisanship';
  
  DOM.previewTelemetry.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(5, 1fr); text-align: center; border: 1px solid var(--border-color); padding: 8px; border-radius: var(--radius-md); background: rgba(0,0,0,0.15); font-family: var(--font-mono); font-size: 0.75rem; margin-top: 10px;">
      <div>Temp: <span style="color: var(--accent-glow);">${temp}°C</span></div>
      <div>Grind: <span style="color: var(--accent-glow);">#${grind}</span></div>
      <div>Ratio: <span style="color: var(--accent-glow);">${ratio}</span></div>
      <div>Time: <span style="color: var(--accent-glow);">${time}s</span></div>
      <div>Score: <span style="color: var(--accent-glow);">⭐ ${rating}</span></div>
    </div>
    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 8px; font-family: var(--font-mono);">${tags}</div>
  `;
  
  DOM.previewBody.innerHTML = parseMarkdown(content);
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  const title = DOM.editorTitle.value.trim();
  const content = DOM.editorContent.value.trim();
  const category = DOM.editorCategory.value;
  const itemType = DOM.editorItemType.value;
  const tagsRaw = DOM.editorTags.value.trim();
  
  if (!title || !content) {
    showToast("❌ 제목과 본문 내용을 채워주세요.", "error");
    return;
  }
  
  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : ["커피"];
  
  const telemetry = {
    temp: DOM.editorTemp.value || "90",
    grind: DOM.editorGrind.value || "12",
    ratio: DOM.editorRatio.value || "1:2.0",
    time: DOM.editorTime.value || "30",
    rating: DOM.editorRating.value || "4.5"
  };
  
  const newDoc = {
    title,
    category,
    itemType,
    author: state.user?.name || "정구영",
    role: state.user?.role || "Chief Alchemist",
    date: new Date().toISOString().split('T')[0],
    tags,
    telemetry,
    content,
    isLocked: false
  };
  
  await saveDocument(newDoc);
  
  // Redirect to feed
  DOM.categoryTabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.click();
    }
  });
}

// ==========================================================================
// 8. TEXT PARSERS & HELPERS
// ==========================================================================
function parseMarkdown(md) {
  // Simple regex markdown parser supporting headings, lists, bolds, blocks
  let html = md;
  
  // Headers: ### Header
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 style="font-family: var(--font-heading); margin-top: 25px; margin-bottom: 10px; color: var(--accent-glow);">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 style="font-family: var(--font-heading); margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">$1</h1>');
  
  // Bold: **text**
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Bullet point: - item
  html = html.replace(/^\- (.*$)/gim, '<li style="margin-left: 20px; list-style-type: square; margin-bottom: 5px;">$1</li>');
  // Order point: 1. item
  html = html.replace(/^\d+\.\s+(.*$)/gim, '<li style="margin-left: 20px; list-style-type: decimal; margin-bottom: 5px;">$1</li>');
  
  // Wrap list items in lists
  html = html.replace(/(<li>.*?<\/li>)/g, '<ul>$1<\/ul>');
  // Cleanup duplicates
  html = html.replace(/<\/ul>\s*<ul>/g, '');
  
  // Linebreaks
  html = html.replace(/\n/g, '<br>');
  
  return html;
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Show micro overlay toast feedback
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✔' : '⚠'}</span>
    <span>${message}</span>
  `;
  
  DOM.toastContainer.appendChild(toast);
  
  // Animation frames
  setTimeout(() => toast.classList.add('active'), 50);
  
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}
