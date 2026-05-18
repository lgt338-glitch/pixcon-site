/* Analo — Product Data & Renderers */

const PRODUCTS = [
  {
    id: 'iphone-5s',
    name: 'iPhone 5S',
    tag: 'CLASSIC',
    tagline: '심플함의 결정체',
    price: 79000,
    oldPrice: 99000,
    year: '2013',
    bgTint: 'linear-gradient(160deg,#f5f5f7 0%,#e8e8ed 100%)',
    colors: [
      { id: 'black',  name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver', name: '실버',           hex: '#e3e3e8' },
      { id: 'gold',   name: '골드',           hex: '#e6d5a7' },
    ],
    specs: [
      ['디스플레이', '4.0" Retina'],
      ['칩셋',      'A7 Bionic'],
      ['인증',      'Touch ID'],
      ['저장공간',  '16 / 32 GB'],
      ['출시연도',  '2013'],
      ['무게',      '112g'],
    ],
    intro: '클래식한 4인치 디자인과 가벼운 무게. 키즈폰·세컨드폰으로 처음 시작하기에 가장 부담 없는 모델입니다.',
    features: [
      { title:'한 손 조작',  text:'4인치 컴팩트 사이즈, 한 손에 쏙 들어오는 그립감' },
      { title:'Touch ID',   text:'지문으로 빠르게 잠금 해제와 보안 강화' },
      { title:'가벼운 무게', text:'단 112g, 하루 종일 들고 다녀도 부담 없음' },
    ],
    longCopy: '추억 속의 그 디자인 그대로, Analo가 새 하우징과 신품 배터리로 다시 태어나게 했습니다. 부모님의 첫 스마트폰, 아이들의 학습용 기기, 혹은 부담 없는 세컨드폰으로 최적의 선택입니다.',
  },
  {
    id: 'iphone-6',
    name: 'iPhone 6',
    tag: 'ICONIC',
    tagline: '기억하는 그 디자인',
    price: 99000,
    oldPrice: 129000,
    year: '2014',
    bgTint: 'linear-gradient(160deg,#fafafd 0%,#e9e9ee 100%)',
    colors: [
      { id: 'black',     name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver',    name: '실버',           hex: '#e3e3e8' },
      { id: 'gold',      name: '골드',           hex: '#e6d5a7' },
      { id: 'rosegold',  name: '로즈 골드',      hex: '#f4c2bf' },
    ],
    specs: [
      ['디스플레이', '4.7" Retina HD'],
      ['칩셋',      'A8 Bionic'],
      ['인증',      'Touch ID'],
      ['저장공간',  '16 / 64 / 128 GB'],
      ['출시연도',  '2014'],
      ['무게',      '129g'],
    ],
    intro: '아이폰의 상징적인 라운드 디자인. 단아하고 군더더기 없는 외관이 다시 돌아왔습니다.',
    features: [
      { title:'넓어진 화면', text:'4.7인치 Retina HD로 한층 시원해진 시야' },
      { title:'슬림 바디',   text:'6.9mm 얇은 두께, 가벼운 휴대성' },
      { title:'iSight 카메라', text:'위상 검출 오토포커스로 빠른 초점' },
    ],
    longCopy: '단아한 라운드 디자인과 부담 없는 사이즈. 처음 아이폰을 접하는 분, 혹은 두 번째 폰을 가볍게 운용하고 싶은 분께 가장 추천하는 모델입니다.',
  },
  {
    id: 'iphone-6s',
    name: 'iPhone 6S',
    tag: 'POPULAR',
    tagline: '3D Touch의 매력',
    price: 129000,
    oldPrice: 159000,
    year: '2015',
    bgTint: 'linear-gradient(160deg,#f5f5fa 0%,#e3e3eb 100%)',
    colors: [
      { id: 'black',     name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver',    name: '실버',           hex: '#e3e3e8' },
      { id: 'gold',      name: '골드',           hex: '#e6d5a7' },
      { id: 'rosegold',  name: '로즈 골드',      hex: '#f4c2bf' },
    ],
    specs: [
      ['디스플레이', '4.7" Retina HD · 3D Touch'],
      ['칩셋',      'A9 Bionic'],
      ['인증',      'Touch ID (2세대)'],
      ['저장공간',  '16 / 32 / 64 / 128 GB'],
      ['출시연도',  '2015'],
      ['무게',      '143g'],
    ],
    intro: 'A9 칩으로 더 빨라진 반응속도, 3D Touch로 새로워진 사용 경험. 한 세대 위의 가성비 모델입니다.',
    features: [
      { title:'A9 Bionic',  text:'iPhone 6 대비 70% 빠른 처리 성능' },
      { title:'3D Touch',  text:'압력 감지로 새로운 인터랙션 경험' },
      { title:'12MP 카메라', text:'4K 영상 녹화와 Live Photos 지원' },
    ],
    longCopy: '6와 같은 디자인에 한 세대 위 성능. 카카오톡·유튜브·간단한 게임까지 부담 없이 소화하는 균형 잡힌 모델입니다.',
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    tag: 'COMPACT',
    tagline: '작지만 강한 성능',
    price: 149000,
    oldPrice: 179000,
    year: '2016',
    bgTint: 'linear-gradient(160deg,#f7f4ef 0%,#ecddc4 100%)',
    colors: [
      { id: 'black',     name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver',    name: '실버',           hex: '#e3e3e8' },
      { id: 'rosegold',  name: '로즈 골드',      hex: '#f4c2bf' },
    ],
    specs: [
      ['디스플레이', '4.0" Retina'],
      ['칩셋',      'A9 Bionic'],
      ['인증',      'Touch ID'],
      ['저장공간',  '16 / 32 / 64 / 128 GB'],
      ['출시연도',  '2016'],
      ['무게',      '113g'],
    ],
    intro: '5S와 똑같은 4인치 바디에 6S급 두뇌. 한 손 조작의 정석이라 불리는 그 모델입니다.',
    features: [
      { title:'한 손 그립',  text:'4인치 컴팩트 디자인, 주머니에도 쏙' },
      { title:'A9 성능',    text:'작은 사이즈에 6S와 같은 칩셋 탑재' },
      { title:'Touch ID',  text:'홈 버튼 기반의 빠르고 친숙한 잠금 해제' },
    ],
    longCopy: '큰 화면이 부담스러운 분, 작은 사이즈를 선호하는 분께 가장 인기 있는 세컨드폰. 알뜰요금제와 함께 쓰기에 최적입니다.',
  },
  {
    id: 'iphone-7',
    name: 'iPhone 7',
    tag: 'WATERPROOF',
    tagline: '방수와 와이드 카메라',
    price: 179000,
    oldPrice: 219000,
    year: '2016',
    bgTint: 'linear-gradient(160deg,#fafafa 0%,#e0e0e6 100%)',
    colors: [
      { id: 'black',     name: '제트 블랙',     hex: '#1f1f23' },
      { id: 'silver',    name: '실버',         hex: '#e3e3e8' },
      { id: 'gold',      name: '골드',         hex: '#e6d5a7' },
      { id: 'rosegold',  name: '로즈 골드',    hex: '#f4c2bf' },
      { id: 'red',       name: '(PRODUCT)RED', hex: '#d22330' },
    ],
    specs: [
      ['디스플레이', '4.7" Retina HD'],
      ['칩셋',      'A10 Fusion'],
      ['인증',      'Touch ID (2세대)'],
      ['방수등급',  'IP67'],
      ['저장공간',  '32 / 128 / 256 GB'],
      ['출시연도',  '2016'],
    ],
    intro: 'IP67 방수 등급과 광학식 손떨림 보정 카메라. 야외에서도 부담 없이 사용할 수 있습니다.',
    features: [
      { title:'IP67 방수',     text:'생활 방수·방진으로 일상 어디서나' },
      { title:'A10 Fusion',   text:'전 세대 대비 40% 빠른 그래픽 성능' },
      { title:'와이드 컬러',  text:'더 풍부하고 선명한 디스플레이 컬러' },
    ],
    longCopy: '방수 기능이 처음 탑재된 iPhone. 운동·여행·아이가 쓰는 환경에서도 마음 편하게 사용할 수 있는 안심 모델입니다.',
  },
  {
    id: 'iphone-8',
    name: 'iPhone 8',
    tag: 'WIRELESS',
    tagline: '무선충전 첫 모델',
    price: 229000,
    oldPrice: 269000,
    year: '2017',
    bgTint: 'linear-gradient(160deg,#f5f5f7 0%,#d8d8de 100%)',
    colors: [
      { id: 'black',  name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver', name: '실버',           hex: '#e3e3e8' },
      { id: 'gold',   name: '골드',           hex: '#e6c8a5' },
      { id: 'red',    name: '(PRODUCT)RED',   hex: '#d22330' },
    ],
    specs: [
      ['디스플레이', '4.7" Retina HD · True Tone'],
      ['칩셋',      'A11 Bionic'],
      ['인증',      'Touch ID (2세대)'],
      ['특징',      'Qi 무선충전'],
      ['저장공간',  '64 / 128 / 256 GB'],
      ['출시연도',  '2017'],
    ],
    intro: '무선충전이 탑재된 첫 아이폰. 강력한 A11 Bionic 칩으로 지금도 충분히 빠른 성능을 보여줍니다.',
    features: [
      { title:'무선충전',     text:'Qi 표준으로 케이블 없이 간편한 충전' },
      { title:'A11 Bionic',  text:'iOS 16 지원, 지금도 빠른 처리 속도' },
      { title:'True Tone',   text:'주변 조명에 맞춰 자동 색온도 보정' },
    ],
    longCopy: '홈 버튼 디자인의 마지막 세대. 클래식한 외관과 현대적인 성능을 동시에 누리고 싶은 분께 가장 어울리는 모델입니다.',
  },
  {
    id: 'iphone-8-plus',
    name: 'iPhone 8 Plus',
    tag: 'DUAL CAM',
    tagline: '큰 화면과 듀얼 카메라',
    price: 269000,
    oldPrice: 319000,
    year: '2017',
    bgTint: 'linear-gradient(160deg,#f4f4f6 0%,#d0d0d6 100%)',
    colors: [
      { id: 'black',  name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver', name: '실버',           hex: '#e3e3e8' },
      { id: 'gold',   name: '골드',           hex: '#e6c8a5' },
      { id: 'red',    name: '(PRODUCT)RED',   hex: '#d22330' },
    ],
    specs: [
      ['디스플레이', '5.5" Retina HD · True Tone'],
      ['칩셋',      'A11 Bionic'],
      ['인증',      'Touch ID (2세대)'],
      ['카메라',    '듀얼 12MP · 광학 2배 줌'],
      ['저장공간',  '64 / 128 / 256 GB'],
      ['출시연도',  '2017'],
    ],
    intro: '5.5인치 큰 화면과 듀얼 카메라. 인물 사진과 동영상 시청 모두 부담 없이 즐길 수 있습니다.',
    features: [
      { title:'듀얼 카메라',   text:'광학 2배 줌과 인물 사진 모드 지원' },
      { title:'5.5인치 화면',  text:'영상·게임·웹 서핑에 여유로운 크기' },
      { title:'무선충전',     text:'Qi 표준 충전으로 편리한 일상' },
    ],
    longCopy: '동영상 시청과 인물 사진을 즐기는 분께 추천. 홈 버튼 세대의 마지막 플러스 모델로, 클래식 디자인의 큰 화면을 좋아하는 분들께 인기 있습니다.',
  },
  {
    id: 'iphone-xs',
    name: 'iPhone XS',
    tag: 'PREMIUM',
    tagline: 'Face ID와 Super Retina',
    price: 379000,
    oldPrice: 449000,
    year: '2018',
    bgTint: 'linear-gradient(160deg,#1a1a1f 0%,#3a3a42 100%)',
    bgTintDark: true,
    colors: [
      { id: 'black',  name: '스페이스 그레이', hex: '#3a3a3c' },
      { id: 'silver', name: '실버',           hex: '#e3e3e8' },
      { id: 'gold',   name: '골드',           hex: '#e6c8a5' },
    ],
    specs: [
      ['디스플레이', '5.8" Super Retina OLED'],
      ['칩셋',      'A12 Bionic'],
      ['인증',      'Face ID'],
      ['카메라',    '듀얼 12MP · 광학 2배 줌'],
      ['저장공간',  '64 / 256 / 512 GB'],
      ['출시연도',  '2018'],
    ],
    intro: 'OLED Super Retina 디스플레이와 Face ID. Analo 라인업의 최상위 프리미엄 모델입니다.',
    features: [
      { title:'Face ID',       text:'얼굴 인식으로 자연스러운 잠금 해제' },
      { title:'OLED Super Retina', text:'더 깊은 블랙과 풍부한 색상 표현' },
      { title:'A12 Bionic',    text:'기존 대비 50% 향상된 그래픽 성능' },
    ],
    longCopy: '메인폰처럼 쓸 수 있는 프리미엄 세컨드폰. OLED 화면과 Face ID, 듀얼 카메라까지 모두 갖춘 완성형 모델입니다.',
  },
];

/* ============ Utilities ============ */
const krw = n => n.toLocaleString('ko-KR') + '원';
const imgPath = (id, color) => `images/products/${id}-${color}.png`;
const imgPathFromDir = (id, color) => `../images/products/${id}-${color}.png`;

/* ============ Index: Render product grid ============ */
function renderProductGrid() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => {
    const primaryColor = p.colors[0].id;
    const isDark = p.bgTintDark ? ' is-dark' : '';
    return `
      <article class="pcard${isDark}" data-id="${p.id}">
        <a href="product.html?id=${p.id}" class="pcard-link">
          <div class="pcard-tag">${p.tag}</div>
          <div class="pcard-img" style="background:${p.bgTint}">
            <img src="${imgPath(p.id, primaryColor)}" alt="${p.name}" loading="lazy">
          </div>
          <div class="pcard-body">
            <div class="pcard-colors">
              ${p.colors.map(c => `<span class="dot" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
              ${p.colors.length > 0 ? `<span class="pcard-color-count">${p.colors.length}색</span>` : ''}
            </div>
            <h3>${p.name} <span class="pcard-reborn">REBORN</span></h3>
            <p class="pcard-tagline">${p.tagline}</p>
            <div class="pcard-price">
              <span class="old">${krw(p.oldPrice)}</span>
              <span class="now">${krw(p.price)}</span>
            </div>
            <span class="pcard-cta">자세히 보기 <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </div>
        </a>
      </article>
    `;
  }).join('');
}

/* ============ Detail Page: Render product ============ */
function renderProductDetail() {
  const wrap = document.getElementById('productDetail');
  if (!wrap) return;

  const params = new URLSearchParams(location.search);
  const id = params.get('id') || 'iphone-7';
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) {
    wrap.innerHTML = '<div class="container" style="padding:160px 0;text-align:center"><h2>제품을 찾을 수 없습니다.</h2><a href="index.html" class="btn btn-primary" style="margin-top:24px">홈으로</a></div>';
    return;
  }

  document.title = `${p.name} REBORN — Analo`;

  const initialColor = p.colors[0];

  wrap.innerHTML = `
    <section class="pd-hero">
      <div class="container pd-hero-inner">
        <nav class="pd-crumb">
          <a href="index.html">홈</a> <span>/</span>
          <a href="index.html#products">제품</a> <span>/</span>
          <span class="cur">${p.name} REBORN</span>
        </nav>

        <div class="pd-stage">
          <div class="pd-img-wrap" style="background:${p.bgTint}">
            <div class="pd-tag">${p.tag}</div>
            <img id="pdImg" src="${imgPathFromDir(p.id, initialColor.id)}" alt="${p.name}">
          </div>

          <div class="pd-info">
            <span class="eyebrow">Analo · REBORN COLLECTION</span>
            <h1>${p.name} <span class="grad-text">REBORN</span></h1>
            <p class="pd-tagline">${p.tagline}</p>
            <p class="pd-intro">${p.intro}</p>

            <div class="pd-price-row">
              <span class="pd-old">${krw(p.oldPrice)}</span>
              <span class="pd-now">${krw(p.price)}</span>
              <span class="pd-save">${Math.round((1 - p.price / p.oldPrice) * 100)}% OFF</span>
            </div>

            <div class="pd-color-section">
              <div class="pd-color-label">
                컬러 — <strong id="pdColorName">${initialColor.name}</strong>
              </div>
              <div class="pd-color-picker" id="pdColors">
                ${p.colors.map((c, i) => `
                  <button class="pd-color${i === 0 ? ' active' : ''}" data-color="${c.id}" data-name="${c.name}" aria-label="${c.name}">
                    <span style="background:${c.hex}"></span>
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="pd-cta-row">
              <a href="index.html#contact" class="btn btn-primary btn-lg btn-full">구매 문의하기</a>
              <a href="#pd-spec" class="btn btn-outline btn-lg">상세 스펙 ↓</a>
            </div>

            <ul class="pd-perks">
              <li><span>✓</span> 12개월 무상 A/S 보증</li>
              <li><span>✓</span> 7일 단순 변심 교환·환불</li>
              <li><span>✓</span> 평일 14시 이전 주문 시 당일 출고</li>
              <li><span>✓</span> 전용 박스 + 정품 USB 케이블 동봉</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="pd-feature">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">HIGHLIGHTS</span>
          <h2>${p.name}의 매력 포인트</h2>
        </div>
        <div class="pd-feature-grid">
          ${p.features.map((f, i) => `
            <div class="pd-feat">
              <div class="pd-feat-num">0${i + 1}</div>
              <h3>${f.title}</h3>
              <p>${f.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="pd-story">
      <div class="container pd-story-inner">
        <div class="pd-story-img" style="background:${p.bgTint}">
          <img src="${imgPathFromDir(p.id, initialColor.id)}" alt="${p.name}">
        </div>
        <div class="pd-story-copy">
          <span class="eyebrow">WHY REBORN</span>
          <h2>새것처럼,<br>그러나 합리적으로.</h2>
          <p>${p.longCopy}</p>
          <p class="pd-story-sub">정품 메인보드 + 새 하우징 + 신품 배터리. 32단계 품질 검수를 통과한 제품만 박싱되어 출고됩니다.</p>
          <a href="index.html#process" class="btn btn-outline">제작 과정 보기 →</a>
        </div>
      </div>
    </section>

    <section class="pd-spec-section" id="pd-spec">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">SPECIFICATIONS</span>
          <h2>상세 스펙</h2>
        </div>
        <div class="pd-spec-table">
          ${p.specs.map(([k, v]) => `
            <div class="pd-spec-row">
              <div class="pd-spec-key">${k}</div>
              <div class="pd-spec-val">${v}</div>
            </div>
          `).join('')}
          <div class="pd-spec-row">
            <div class="pd-spec-key">제품 구성</div>
            <div class="pd-spec-val">${p.name} 본체 · USB 케이블 · 전용 박스 · 사용 안내서</div>
          </div>
          <div class="pd-spec-row">
            <div class="pd-spec-key">보증 기간</div>
            <div class="pd-spec-val">구매일로부터 12개월 무상 A/S</div>
          </div>
        </div>
      </div>
    </section>

    <section class="pd-related">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">RELATED</span>
          <h2>이런 모델은 어떠세요?</h2>
        </div>
        <div class="pd-related-grid">
          ${PRODUCTS.filter(x => x.id !== p.id).slice(0, 4).map(r => `
            <a href="product.html?id=${r.id}" class="pd-rel-card">
              <div class="pd-rel-img" style="background:${r.bgTint}">
                <img src="${imgPathFromDir(r.id, r.colors[0].id)}" alt="${r.name}" loading="lazy">
              </div>
              <div class="pd-rel-body">
                <h4>${r.name} REBORN</h4>
                <p>${r.tagline}</p>
                <span class="pd-rel-price">${krw(r.price)}</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="pd-final-cta">
      <div class="container pd-fcta-inner">
        <h2>${p.name} REBORN<br>지금 바로 만나보세요.</h2>
        <p>전화·카카오톡 상담 모두 환영합니다. 1영업일 내 답변드립니다.</p>
        <div class="pd-fcta-row">
          <a href="index.html#contact" class="btn btn-primary btn-lg">문의 보내기</a>
          <a href="tel:01034222684" class="btn btn-outline btn-lg">📞 010-3422-2684</a>
        </div>
      </div>
    </section>
  `;

  // Color picker behavior
  const img = document.getElementById('pdImg');
  const colorName = document.getElementById('pdColorName');
  const picker = document.getElementById('pdColors');
  if (picker) {
    picker.addEventListener('click', e => {
      const btn = e.target.closest('.pd-color');
      if (!btn) return;
      const color = btn.dataset.color;
      const name = btn.dataset.name;
      picker.querySelectorAll('.pd-color').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = imgPathFromDir(p.id, color);
        img.style.opacity = '1';
      }, 180);
      colorName.textContent = name;
    });
  }
}

/* ============ Auto-init ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  renderProductDetail();
});
