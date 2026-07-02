/* ══════════════════════════════════════════════
   SunLimited — main.js
══════════════════════════════════════════════ */

/* ── FOOTER TEMPLATE HTML ── */
const FOOTER_HTML = `
<footer class="bg-gray-900 pt-14 pb-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">

    <!-- Top grid: 2-col on desktop, stacked on mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 border-b border-white/10">

      <!-- Brand -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
 <div class="flex items-center gap-2 mb-4">
  <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
    <img src="SUNLIMITED-PICS/wthout bg.png" alt="Company Logo" class="w-10 h-10 object-contain">
  </div>

  <span class="font-poppins font-800 text-white text-base">
    SUN<span class="text-yellow-400">LIMITED</span>
  </span>
</div>
        <p class="text-white/40 text-sm leading-relaxed max-w-xs">
          Reliable and affordable solar solutions for homes and businesses.
        </p>
      </div>

      <!-- Contact -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div class="font-poppins font-700 text-white text-xs uppercase tracking-widest mb-4">Contact Info</div>
        <div class="space-y-3 text-sm text-white/45">
          <div class="flex items-center gap-2 justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>0991 353 0296</span>
          </div>
          <div class="flex items-center gap-2 justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>ace.avillanoza16@gmail.com</span>
          </div>
          <div class="flex items-center gap-2 justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Pag Asa Tibag, Tarlac City, Philippines</span>
          </div>
                <a href="https://www.facebook.com/profile.php?id=100090419641465" target="_blank"
        class="inline-flex items-center gap-2 h-8 px-3 bg-white/10 rounded-full text-white/60 hover:bg-yellow-400 hover:text-dark transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
        <span class="text-xs font-poppins">Sunlimited</span>
      </a>
        </div>
      </div>

    </div>

    <!-- Bottom bar: social + copyright -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
      <div class="text-white/25 text-xs text-center">© 2024 SunLimited. All Rights Reserved.</div>
    </div>

  </div>
</footer>`;

/* ── INJECT FOOTER INTO EVERY PAGE ── */
function injectFooters() {
  pages.forEach(name => {
    const page = document.getElementById('page-' + name);
    if (!page) return;

    // Remove any existing footer inside this page first (prevents duplicates on re-init)
    const existing = page.querySelector('footer');
    if (existing) existing.remove();

    // Also clear old footer slot divs
    const slot = page.querySelector('[id^="footer-"]');
    if (slot) slot.innerHTML = '';

    // Append the unified footer
    page.insertAdjacentHTML('beforeend', FOOTER_HTML);
  });
}

/* ── PAGE NAVIGATION ── */
const pages = ['home', 'about', 'services', 'reviews', 'projects', 'contact'];

function showPage(name) {
  pages.forEach(p => {
    document.getElementById('page-' + p).classList.remove('active');
    const nl = document.getElementById('nav-' + p);
    if (nl) nl.classList.remove('active');
  });

  document.getElementById('page-' + name).classList.add('active');

  const nl = document.getElementById('nav-' + name);
  if (nl) nl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });

  setTimeout(() => {
    document.querySelectorAll('#page-' + name + ' .reveal').forEach(el => {
      el.classList.add('vis');
    });
    initReveal();
  }, 50);

  if (name === 'reviews') initReviews();
  if (name === 'projects') initProjects();
  if (name === 'contact') initFAQ();
}

window.showPage = showPage;

/* ── MOBILE NAV ── */
function toggleMobile() {
  const nav = document.getElementById('mobileNav');
  const ov  = document.getElementById('mobileOverlay');
  nav.classList.toggle('open');
  ov.classList.toggle('hidden');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}
window.toggleMobile = toggleMobile;

/* ── REVEAL ON SCROLL ── */
function initReveal() {
  const els = document.querySelectorAll('.page.active .reveal:not(.vis)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

window.addEventListener('scroll', initReveal, { passive: true });

/* ── REVIEWS DATA ── */
/* ── REVIEWS DATA ── */
const allReviews = [
  {
    name: 'Jayson Valentino', loc: 'Mexico, Pampanga', stars: 5,
    text: 'Our airconditioner has been running nonstop since earlier, and my battery is almost fully charged. 😊',
    initials: 'JV', color: '#4A90D9'
  },
  {
    name: 'Sam Balisi', loc: 'Tarlac City, Tarlac', stars: 5,
    text: 'Sunlimited Nambawan💪💪💪👌👌👌Sulit ang tiwala😊',
    initials: 'SB', color: '#50B87C'
  },
  {
    name: 'Titus Miclat Jr.', loc: '', stars: 5,
    text: '👏👏👏',
    initials: 'TM', color: '#E0A030'
  },
  {
    name: 'Willie Capiral', loc: 'Pag Asa Tibag, Tarlac City', stars: 5,
    text: 'Kahit buong araw nakasindi aircon hindi nauubos laman ng battery.',
    initials: 'WC', color: '#9B6FD1'
  },
  {
    name: 'Jay Marc Valdez', loc: 'Santa Ignacia, Tarlac', stars: 5,
    text: 'Excellent service! Thank you sir Ace Avillanoza and your team! Very satisfied customer here!',
    initials: 'JV', color: '#F5A800'
  },
  {
    name: 'Michael Deleon', loc: 'Tarlac City, Tarlac', stars: 5,
    text: 'Invest once, enjoy long-term savings with solar power.',
    initials: 'MD', color: '#3AB7BF'
  },
  {
    name: 'Kamukgang Vlogs', loc: 'Tarlac, Philippines', stars: 5,
    text: 'Investing in peace of mind. ☀️🔋 Ang solidong solar system powered by Sunlimited! Wala nang kaba sa monthly bills.',
    initials: 'KV', color: '#E86C6C'
  },
  {
    name: 'Jestony Piol', loc: '', stars: 5,
    text: 'Salamat boss!',
    initials: 'JP', color: '#6FCB9F'
  },
  {
    name: 'Melinda Avillanoza', loc: 'Tarlac City, Tarlac', stars: 5,
    text: '4 aircons running during the night, investment really worth it 💯',
    initials: 'MA', color: '#D46A9F'
  },
  {
    name: 'Jay Timbol', loc: '', stars: 5,
    text: 'Kudos again Sunlimited team!',
    initials: 'JT', color: '#7A8FD1'
  },
  {
    name: 'Gamaliel de Guzman', loc: 'Tarlac City, Tarlac', stars: 5,
    text: 'Brownout ba kanina? At kagabi? Baka naman... Sunlimited ang kailangan?',
    initials: 'GG', color: '#C97B4A'
  },
  {
    name: 'Rhea Tolentino', loc: '', stars: 5,
    text: 'Don\u2019t risk your investment with guerrilla solar installers. Choose a trusted and legit provider — Sunlimited.',
    initials: 'RT', color: '#F5A623'
  },
];


let reviewPage = 0;

function initReviews() {
  reviewPage = 0;
  renderReviews();
}

function renderReviews() {
  const toShow = allReviews.slice(0, 6 + reviewPage * 3);

  document.getElementById('reviewsGrid').innerHTML = toShow.map(r => `
    <div class="review-card reveal vis">
      <div class="flex items-center justify-between mb-2">
        <div class="stars">${'★'.repeat(r.stars)}</div>
      </div>
      <p class="text-gray-500 text-sm leading-relaxed mb-4">"${r.text}"</p>
      <div class="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style="background-color: ${r.color}">
          ${r.initials}
        </div>
        <div>
          <div class="font-poppins font-700 text-gray-800 text-sm">${r.name}</div>
          ${r.loc ? `<div class="text-gray-400 text-xs">${r.loc}</div>` : ''}
        </div>
      </div>
    </div>`).join('');

  document.getElementById('loadMoreBtn').style.display =
    toShow.length >= allReviews.length ? 'none' : 'inline-flex';
}

function loadMoreReviews() {
  reviewPage++;
  renderReviews();
}
window.loadMoreReviews = loadMoreReviews;

/* ── PROJECTS DATA ── */
const allProjects = [
  {
    id: 'hybrid-8kw-bacuit-tibag',
    title: '8kW Hybrid Solar Installation', loc: 'Bacuit, Tibag, Tarlac City',
    savings: '₱9,200/mo', img: 'SUNLIMITED-PICS/14.jpg',
    panels: '16pcs 620W Jinko Bi-facial', battery: '330Ah Sunlimited LiFePO4',
    images: ['SUNLIMITED-PICS/14.jpg', 'SUNLIMITED-PICS/PROJECT 15 SYSTEM.jpg'],
    imageLabels: ['Installation Photo',  'Sungrow Inverter']
  },
  {
    id: 'hybrid-6kw-angeles',
    title: '6kW Hybrid Solar Installation', loc: 'Angeles, Pampanga',
    savings: '₱6,900/mo', img: 'SUNLIMITED-PICS/11.jpg',
    panels: '12pcs 615W Trina Bi-facial', battery: '314Ah Alp Solar LiFePO4',
    images: ['SUNLIMITED-PICS/11.jpg', 'SUNLIMITED-PICS/PROJECT 10 SYSTEM.jpg', ],
    imageLabels: ['Installation Photo', 'Sungrow Inverter', ]
  },
  {
    id: 'hybrid-8kw-balanga',
    title: '8kW Hybrid Solar Installation', loc: 'Balanga, Bataan',
    savings: '₱8,800/mo', img: 'SUNLIMITED-PICS/6.jpg',
    panels: '12pcs 640W Jinko Bi-facial', battery: '400Ah JM LiFePO4',
    images: ['SUNLIMITED-PICS/6.jpg', 'SUNLIMITED-PICS/PROJECT 7 SYSTEM.jpg',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter', ]
  },
  {
    title: '12kW  Hybrid Solar Installation', loc: 'Brgy. Ayao-Iyao Itaas, Lemery, Batangas',
    savings: '₱15,200/mo', img: 'SUNLIMITED-PICS/ PROJECT 1.JPG',
    panels: '18pcs 620W Jinko Bi-facial Solar Panels', battery: '330Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 1.JPG','SUNLIMITED-PICS/PROJECT 1 SYSTEM.jpg'],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '8kw Hybrid Solar Installation', loc: 'Brgy. Matatalaib, Tarlac City',
    savings: '₱9,100/mo', img: 'SUNLIMITED-PICS/PROJECT 2.JPG',
    panels: '16pcs 640W Jinko Bi-facial Solar Panels', battery: '330Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 2.JPG','SUNLIMITED-PICS/PROJECT 2 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '6kw Sungrow Hybrid Solar Installation', loc: 'Brgy. Magaspac, Gerona',
    savings: '₱6,400/mo', img: 'SUNLIMITED-PICS/PROJECT 3.JPG',
    panels: '8pcs 640W Jinko Bi-facial Solar Panels', battery: '330Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 3.JPG','SUNLIMITED-PICS/PROJECT 3 SYSTEM.JPG'],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '6kw Sungrow Hybrid Solar Installation', loc: 'Brgy. Magaspac, Gerona',
    savings: '₱6,400/mo', img: 'SUNLIMITED-PICS/PROJECT 4.JPG',
    panels: '8pcs 640W Jinko Bi-facial Solar Panels', battery: '330Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 4.JPG','SUNLIMITED-PICS/PROJECT 4 SYSTEM.JPG'],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '10kW Sungrow Hybrid Solar Installation', loc: 'Brgy. Maliwalo, Tarlac City',
    savings: '₱12,300/mo', img: 'SUNLIMITED-PICS/PROJECT 5.JPG',
    panels: '16pcs 640W Jinko Bi-facial Solar Panels', battery: '330Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 5.JPG','SUNLIMITED-PICS/PROJECT 5 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '12kW Sungrow Hybrid Solar Installation', loc: 'Brgy. San Antonio, Gerona, Tarlac',
    savings: '₱15,800/mo', img: 'SUNLIMITED-PICS/PROJECT 66.JPG',
    panels: '24pcs 640W Jinko Bi-facial Solar Panels', battery: '2pcs 314Ah Sungrow LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 66.JPG','SUNLIMITED-PICS/PROJECT 6 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '2pcs 8kW Sungrow Hybrid Solar Installation', loc: 'San Fernando, Pampanga',
    savings: '₱21,800/mo', img: 'SUNLIMITED-PICS/PROJECT 16.JPG',
    panels: '36pcs 630W Seraphim Bi-facial Solar Panels', battery: '3pcs 314Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 16.JPG','SUNLIMITED-PICS/PROJECT 16 SYSTEM.JPG'],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '6kW Sungrow Hybrid Solar Installation', loc: 'Brgy. Tibag, Tarlac City',
    savings: '₱8,800/mo', img: 'SUNLIMITED-PICS/PROJECT 8.JPG',
    panels: '6pcs 585W JA Bi-facial Solar Panels', battery: '200Ah OLiter LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 8.JPG','SUNLIMITED-PICS/PROJECT 8 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '10kW Sungrow Hybrid Solar Installation', loc: 'Tuscani Subd., Burot, Tarlac City',
    savings: '₱12,300/mo', img: 'SUNLIMITED-PICS/PROJECT 9.JPG',
    panels: '16pcs 640W Jinko Bi-facial Solar Panels', battery: '314Ah COOLi LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 9.JPG','SUNLIMITED-PICS/PROJECT 9 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '8kW Sungrow Hybrid Solar Installation', loc: 'Sta. Maria, Bulacan',
    savings: '₱9,000/mo', img: 'SUNLIMITED-PICS/PROJECT 17.JPG',
    panels: '16pcs 630W Seraphim Bi-facial Solar Panels', battery: '330Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 17.JPG','SUNLIMITED-PICS/PROJECT 17 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
  {
    title: '8kW Sungrow Hybrid Solar Installation', loc: 'San Vicente, Victoria, Tarlac',
    savings: '₱7,200/mo', img: 'SUNLIMITED-PICS/PROJECT 11.JPG',
    panels: '12pcs 615W Trina Bi-facial Solar Panels', battery: '314Ah Alp Solar LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 11.JPG','SUNLIMITED-PICS/PROJECT 11 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
    {
    title: '2x10kW Sungrow Hybrid Solar Installation', loc: 'Magalang, Pampanga',
    savings: '₱7,200/mo', img: 'SUNLIMITED-PICS/PROJECT 12.JPG',
    panels: '40pcs 615W Trina Bi-facial Solar Panels', battery: '4pcs 314Ah Alp Solar LiFePO4 ',
    images: ['SUNLIMITED-PICS/PROJECT 12.JPG','SUNLIMITED-PICS/PROJECT 12 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
    {
    title: '10kW Sungrow Hybrid Solar Installation', loc: 'San Isidro, Tarlac City',
    savings: '₱7,200/mo', img: 'SUNLIMITED-PICS/PROJECT 13.JPG',
    panels: '21pcs 585W JA Bi-facial Solar Panels', battery: '314Ah Dongjin LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 13.JPG','SUNLIMITED-PICS/PROJECT 13 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
    {
    title: '10kW Sungrow Hybrid Solar Installation', loc: 'Awag, Anda, Pangasinan',
    savings: '₱7,200/mo', img: 'SUNLIMITED-PICS/PROJECT 14.JPG',
    panels: '24pcs 585W JA Bi-facial Solar Panels', battery: '3pcs 314Ah Menred LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 14.JPG','SUNLIMITED-PICS/PROJECT 14 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },
    {
    title: '8kW Sungrow Hybrid Solar Installation', loc: 'Milasin 1st, Pura, Tarlac',
    savings: '₱8,900/mo', img: 'SUNLIMITED-PICS/PROJECT 18.JPG',
    panels: '16pcs 630W Seraphim Bi-facial Solar Panels', battery: '314Ah Sunlimited LiFePO4 Battery',
    images: ['SUNLIMITED-PICS/PROJECT 18.JPG','SUNLIMITED-PICS/PROJECT 18 SYSTEM.JPG',],
    imageLabels: ['Installation Photo', 'Sungrow Inverter']
  },


];

/* ── DEFAULT WARRANTY INFO (shown for every project's "Warranty" detail) ── */
const DEFAULT_WARRANTY = {
  inverter: '10 years',
  panels: '15 years',
  battery: '5 years',
  workmanship: '2 years'
};

let projectPage = 0;
let projectImageState = {}; // card-carousel state (thumbnail carousels in the grid)

function initProjects() {
  projectPage = 0;
  renderProjects();
}

function renderProjects() {
  const toShow = allProjects.slice(0, 6 + projectPage * 3);

  projectImageState = {};

  document.getElementById('projectsGrid').innerHTML = toShow.map(p => {
    const idx = allProjects.indexOf(p);
    const images = (p.images && p.images.length) ? p.images : [p.img];
    const labels = (p.imageLabels && p.imageLabels.length) ? p.imageLabels : ['Installation Photo'];
    const hasMultiple = images.length > 1;

    return `
    <div class="project-card reveal vis">
      <div class="project-card-img-wrap w-full cursor-pointer" onclick="openProjectModal(${idx})">
        <div class="project-carousel-imgs" id="projImgs-${idx}">
          ${images.map((img, i) => `<img src="${img}" alt="${p.title} - ${labels[i] || ''}" class="project-card-img${i === 0 ? ' active' : ''}"/>`).join('')}
        </div>
        ${hasMultiple ? `<div class="project-img-caption" id="projCaption-${idx}">${labels[0]}</div>` : ''}
        ${hasMultiple ? `
          <button type="button" class="project-carousel-arrow left" onclick="event.stopPropagation(); changeProjectImage(${idx}, -1)" aria-label="Previous photo">‹</button>
          <button type="button" class="project-carousel-arrow right" onclick="event.stopPropagation(); changeProjectImage(${idx}, 1)" aria-label="Next photo">›</button>
          <div class="project-carousel-dots" id="projDots-${idx}">
            ${images.map((_, i) => `<span class="project-carousel-dot${i === 0 ? ' active' : ''}" onclick="event.stopPropagation(); goToProjectImage(${idx}, ${i})"></span>`).join('')}
          </div>` : ''}
      </div>
      <div class="p-5 cursor-pointer" onclick="openProjectModal(${idx})">
        <div class="flex items-center justify-between mb-2">
          <span class="text-yellow-500 font-poppins font-700 text-xs">${p.savings}</span>
        </div>
        <h3 class="font-poppins font-700 text-gray-800 text-base mb-1">${p.title}</h3>
        <p class="text-gray-400 text-xs flex items-center gap-1">📍 ${p.loc}</p>
        <div class="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 grid grid-cols-2 gap-2">
          <div><span class="text-gray-400">Panels:</span> ${p.panels}</div>
          <div><span class="text-gray-400">Battery:</span> ${p.battery}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  document.getElementById('loadMoreProjectsBtn').style.display =
    toShow.length >= allProjects.length ? 'none' : 'inline-flex';
}

function loadMoreProjects() {
  projectPage++;
  renderProjects();
}
window.loadMoreProjects = loadMoreProjects;

/* ── GRID CARD MINI-CAROUSEL ── */
function changeProjectImage(idx, direction) {
  const p = allProjects[idx];
  const images = (p.images && p.images.length) ? p.images : [p.img];
  const total = images.length;
  if (total <= 1) return;
  const cur = projectImageState[idx] || 0;
  const next = (cur + direction + total) % total;
  projectImageState[idx] = next;
  updateProjectCardCarousel(idx);
}
window.changeProjectImage = changeProjectImage;

function goToProjectImage(idx, slideIdx) {
  projectImageState[idx] = slideIdx;
  updateProjectCardCarousel(idx);
}
window.goToProjectImage = goToProjectImage;

function updateProjectCardCarousel(idx) {
  const p = allProjects[idx];
  const images = (p.images && p.images.length) ? p.images : [p.img];
  const labels = (p.imageLabels && p.imageLabels.length) ? p.imageLabels : ['Installation Photo'];
  const cur = projectImageState[idx] || 0;

  const imgWrap = document.getElementById(`projImgs-${idx}`);
  if (imgWrap) {
    imgWrap.querySelectorAll('.project-card-img').forEach((img, i) => {
      img.classList.toggle('active', i === cur);
    });
  }

  const dotsWrap = document.getElementById(`projDots-${idx}`);
  if (dotsWrap) {
    dotsWrap.querySelectorAll('.project-carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === cur);
    });
  }

  const caption = document.getElementById(`projCaption-${idx}`);
  if (caption) {
    caption.textContent = labels[cur] || '';
  }
}

/* ══════════════════════════════════════
   PROJECT DETAIL MODAL — split layout
══════════════════════════════════════ */
let currentModalProjectIndex = null;
let modalImageIndex = 0;

function openProjectModal(i) {
  currentModalProjectIndex = i;
  modalImageIndex = 0;

  const overlay = document.createElement('div');
  overlay.id = 'projModal';
  overlay.className = 'proj-modal-overlay';
  overlay.innerHTML = `
    <div class="proj-modal-desktop" id="projModalDesktop">
      <div class="proj-modal-left">
        <div class="proj-modal-left-header">
          <button class="proj-modal-close" onclick="closeProjectModal()" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <div class="proj-modal-nav-btns">
            <button class="proj-modal-nav-btn" onclick="navigateProject(-1)" aria-label="Previous project">‹</button>
            <button class="proj-modal-nav-btn" onclick="navigateProject(1)" aria-label="Next project">›</button>
          </div>
        </div>
        <div class="proj-modal-left-body" id="projModalBody"></div>
        <div class="proj-modal-counter">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          <span id="projModalCounter"></span>
        </div>
      </div>
<div class="proj-modal-right" id="projModalRight">
        <button class="proj-modal-mobile-close" onclick="closeProjectModal()" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <button class="proj-modal-fs-close" onclick="toggleModalFullscreen()" aria-label="Exit fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <div class="proj-modal-imgs" id="projModalImgs"></div>
        <div class="proj-modal-dots" id="projModalDots"></div>
        <button class="proj-modal-expand" onclick="toggleModalFullscreen()" aria-label="Fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/></svg>
        </button>
        <button class="proj-modal-arrow left" onclick="changeModalImage(-1)" aria-label="Previous photo">‹</button>
        <button class="proj-modal-arrow right" onclick="changeModalImage(1)" aria-label="Next photo">›</button>
      </div>
    </div>`;

  overlay.onclick = e => {
    if (e.target === overlay) closeProjectModal();
  };

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  renderModalContent();
}
window.openProjectModal = openProjectModal;

function renderModalContent() {
  const p = allProjects[currentModalProjectIndex];
  const images = (p.images && p.images.length) ? p.images : [p.img];
  const warranty = p.warranty || DEFAULT_WARRANTY;

  document.getElementById('projModalBody').innerHTML = `
    <div class="proj-modal-summary">
      <h3 class="proj-modal-title">${p.title}</h3>
      <p class="proj-modal-loc">📍 ${p.loc}</p>

      <button type="button" class="proj-modal-view-details-btn" id="projModalViewDetailsBtn" onclick="toggleMobileDetails()">
        <span>View Details</span>
        <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    </div>

    <div class="proj-modal-details-section" id="projModalDetailsSection">
      <div class="proj-modal-details-header">
        <button type="button" class="proj-modal-details-back" onclick="toggleMobileDetails()" aria-label="Back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <span class="proj-modal-details-header-title">Project Details</span>
      </div>

      <div class="proj-modal-divider"></div>

      <div class="proj-modal-info-row">
        <div class="proj-modal-info-icon">💰</div>
        <div>
          <div class="proj-modal-info-label">Est. Monthly Savings</div>
          <div class="proj-modal-info-value gold">${p.savings}</div>
        </div>
      </div>
      <div class="proj-modal-info-row">
        <div class="proj-modal-info-icon green">▦</div>
        <div>
          <div class="proj-modal-info-label">Panels Used</div>
          <div class="proj-modal-info-value">${p.panels}</div>
        </div>
      </div>
      <div class="proj-modal-info-row">
        <div class="proj-modal-info-icon blue">🔋</div>
        <div>
          <div class="proj-modal-info-label">Battery System</div>
          <div class="proj-modal-info-value">${p.battery}</div>
        </div>
      </div>
      <div class="proj-modal-info-row">
        <div class="proj-modal-info-icon purple">🛡️</div>
        <div>
          <div class="proj-modal-info-label">Warranty</div>
          <div class="proj-modal-info-value">
            <ul class="proj-modal-warranty-list" style="list-style:none;margin:0;padding:0;">
              <li>Inverter: ${warranty.inverter}</li>
              <li>Solar panels: ${warranty.panels}</li>
              <li>Battery: ${warranty.battery}</li>
              <li>Workmanship: ${warranty.workmanship}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="proj-modal-cta">
        <div class="proj-modal-cta-title">Ready to go solar?</div>
        <div class="proj-modal-cta-sub">Get a free consultation today.</div>
        <button onclick="showPage('contact'); closeProjectModal();" class="btn-gold w-full justify-center">Get a Quote →</button>
      </div>
    </div>
  `;

  document.getElementById('projModalImgs').innerHTML = images
    .map((img, i) => `<img src="${img}" alt="${p.title}" class="proj-modal-img${i === 0 ? ' active' : ''}"/>`)
    .join('');

  document.getElementById('projModalDots').innerHTML = images.length > 1
    ? images.map((_, i) => `<span class="proj-modal-dot${i === 0 ? ' active' : ''}" onclick="goToModalImage(${i})"></span>`).join('')
    : '';

  updateModalCounter();
}

/* ── Mobile "View Details" screen swap ──
   On mobile this swaps the whole card between the photo+summary screen and
   a dedicated Project Details screen (matching the design), rather than
   unfolding a panel underneath the photo. On desktop this class has no
   visual effect — both are shown together as usual. */
function toggleMobileDetails() {
  const card = document.getElementById('projModalDesktop');
  const body = document.getElementById('projModalBody');
  if (!card) return;
  card.classList.toggle('mobile-details');
  if (body) body.scrollTop = 0;
}
window.toggleMobileDetails = toggleMobileDetails;

function updateModalCounter() {
  const p = allProjects[currentModalProjectIndex];
  const images = (p.images && p.images.length) ? p.images : [p.img];
  document.getElementById('projModalCounter').textContent = `${modalImageIndex + 1} / ${images.length}`;
}

function changeModalImage(direction) {
  const p = allProjects[currentModalProjectIndex];
  const images = (p.images && p.images.length) ? p.images : [p.img];
  const total = images.length;
  if (total <= 1) return;
  modalImageIndex = (modalImageIndex + direction + total) % total;

  document.querySelectorAll('#projModalImgs .proj-modal-img').forEach((img, i) => {
    img.classList.toggle('active', i === modalImageIndex);
  });
  document.querySelectorAll('#projModalDots .proj-modal-dot').forEach((d, i) => {
    d.classList.toggle('active', i === modalImageIndex);
  });
  updateModalCounter();
}
window.changeModalImage = changeModalImage;

function goToModalImage(i) {
  modalImageIndex = i;
  document.querySelectorAll('#projModalImgs .proj-modal-img').forEach((img, idx) => {
    img.classList.toggle('active', idx === i);
  });
  document.querySelectorAll('#projModalDots .proj-modal-dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === i);
  });
  updateModalCounter();
}
window.goToModalImage = goToModalImage;

function navigateProject(direction) {
  const total = allProjects.length;
  currentModalProjectIndex = (currentModalProjectIndex + direction + total) % total;
  modalImageIndex = 0;
  renderModalContent();
}
window.navigateProject = navigateProject;

function toggleModalFullscreen() {
  const rightPanel = document.getElementById('projModalRight');
  if (rightPanel) rightPanel.classList.toggle('fullscreen');
}
window.toggleModalFullscreen = toggleModalFullscreen;

function closeProjectModal() {
  const m = document.getElementById('projModal');
  if (m) m.remove();
  document.body.style.overflow = '';
  currentModalProjectIndex = null;
}
window.closeProjectModal = closeProjectModal;

document.addEventListener('keydown', e => {
  const modalOpen = document.getElementById('projModal');
  if (!modalOpen) return;
  if (e.key === 'Escape') closeProjectModal();
  if (e.key === 'ArrowLeft') changeModalImage(-1);
  if (e.key === 'ArrowRight') changeModalImage(1);
});

/* ── NAVIGATE TO A SPECIFIC PROJECT DETAIL FROM ANOTHER PAGE ── */
function goToProjectDetail(projectId) {
  const index = allProjects.findIndex(p => p.id === projectId);
  if (index === -1) return;

  showPage('projects');
  setTimeout(() => openProjectModal(index), 150);
}
window.goToProjectDetail = goToProjectDetail;
/* ── FAQ ── */
const faqs = [
  {
    q: 'How much does a solar installation cost?',
    a: 'The cost varies based on system size and type. A typical residential system (5–10kW) ranges from ₱200,000 to ₱450,000. Contact us for a free site assessment and accurate quote.'
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential installations are completed within 1–3 days. Commercial systems may take 3–7 days depending on the size and complexity of the project.'
  },
  {
    q: 'What warranty do your products come with?',
    a: 'Sungrow inverters come with a 5-year warranty (extendable to 10 years). Solar panels typically carry a 25-year performance warranty. Batteries have a 10-year warranty.'
  },
  {
    q: 'Will solar work during brownouts?',
    a: 'Yes! Our hybrid systems with battery backup will keep your home powered during grid outages. Pure on-grid systems will shut down during brownouts for safety reasons.'
  },
  {
    q: 'How much can I save on my electric bill?',
    a: 'Most of our clients save 50–80% on their monthly electricity bills. A household paying ₱5,000/month can typically save ₱3,000–₱4,000 after going solar.'
  },
  {
    q: 'Is there a maintenance requirement?',
    a: 'Solar systems require minimal maintenance. We recommend a system check every 6–12 months. We offer maintenance packages to keep your system running at peak performance.'
  },
];

let faqOpen = -1;

function initFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqs.map((f, i) => `
    <div class="border border-gray-200 rounded-xl overflow-hidden">
      <button onclick="toggleFAQ(${i})" class="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
        <span class="font-poppins font-700 text-gray-800 text-sm pr-4">${f.q}</span>
        <span id="faqChev-${i}" class="text-yellow-500 text-lg flex-shrink-0 transition-transform duration-200">+</span>
      </button>
      <div id="faqBody-${i}" class="overflow-hidden max-h-0 transition-all duration-300">
        <div class="px-4 pb-4 text-gray-500 text-sm leading-relaxed">${f.a}</div>
      </div>
    </div>`).join('');
}

function toggleFAQ(i) {
  if (faqOpen === i) {
    document.getElementById('faqBody-' + i).style.maxHeight = '0';
    document.getElementById('faqChev-' + i).textContent = '+';
    faqOpen = -1;
  } else {
    if (faqOpen >= 0) {
      document.getElementById('faqBody-' + faqOpen).style.maxHeight = '0';
      document.getElementById('faqChev-' + faqOpen).textContent = '+';
    }
    const body = document.getElementById('faqBody-' + i);
    body.style.maxHeight = body.scrollHeight + 'px';
    document.getElementById('faqChev-' + i).textContent = '−';
    faqOpen = i;
  }
}
window.toggleFAQ = toggleFAQ;

/* ── CONTACT FORM ── */
/* ── CONTACT FORM ── */
function submitContact(btn) {
  const name = document.getElementById("contactName").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  const successEl = document.getElementById("contactSuccess");
  const errorEl = document.getElementById("contactError");

  successEl.classList.add("hidden");
  errorEl.classList.add("hidden");

  if (!name || !email || !message) {
    errorEl.textContent = "✗ Please fill in your name, email, and message.";
    errorEl.classList.remove("hidden");
    return;
  }

  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg> Sending…`;

  const templateParams = {
    from_name: name,
    from_phone: phone,
    from_email: email,
    message: message,
  };

  // Send notification to business owner AND auto-reply to customer
  Promise.all([
    emailjs.send("service_y1wj873", "template_x3qa6dg", templateParams),      // to you
    emailjs.send("service_y1wj873", "template_l4gxn7u", templateParams) // to customer
  ])
    .then(function () {
      btn.style.display = "none";
      successEl.classList.remove("hidden");
    })
    .catch(function (err) {
      console.error("EmailJS error:", err);
      errorEl.classList.remove("hidden");
      btn.disabled = false;
      btn.innerHTML = originalText;
    });
}
window.submitContact = submitContact;
/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  if(window.pageYOffset > 80){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ── PROJECTS CAROUSEL ── */
let currentSlide = 0;
const totalSlides = 3;

let startX = 0;
let currentX = 0;
let isSwiping = false;

function goToSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  const track = document.getElementById('projectsTrack');
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

window.goToSlide = goToSlide;

const track = document.getElementById('projectsTrack');

if (track) {
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;

    const diff = currentX - startX;
    const threshold = 50;

    if (diff > threshold) {
      goToSlide(currentSlide - 1);
    } else if (diff < -threshold) {
      goToSlide(currentSlide + 1);
    }

    isSwiping = false;
    startX = 0;
    currentX = 0;
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function() {
  injectFooters();  // Inject unified footer into all pages before showing home
  showPage('home');
  initReveal();
  initFAQ();
});

// ── WHY GO SOLAR MOBILE CAROUSEL ──
let benefitsSlide = 0;

function initBenefitsCarousel() {
  const track = document.getElementById('benefitsTrack');
  const dots = document.querySelectorAll('.solar-benefits-dot');
  if (!track) return;

function goTo(index) {
  benefitsSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Touch swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && benefitsSlide < 3) goTo(benefitsSlide + 1);
      if (diff < 0 && benefitsSlide > 0) goTo(benefitsSlide - 1);
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', initBenefitsCarousel);

// ── SERVICES CARDS MOBILE CAROUSEL ──
let svcSlide = 0;

function initSvcCarousel() {
  const track = document.getElementById('svcTrack');
  const dots = document.querySelectorAll('.services-cards-dot');
  if (!track) return;

  function goTo(index) {
    svcSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && svcSlide < 3) goTo(svcSlide + 1);
      if (diff < 0 && svcSlide > 0) goTo(svcSlide - 1);
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', initSvcCarousel);

/* services-section.js
   Powers the "Learn More" popup modal on the Services page (shared by the
   desktop grid and the mobile carousel). Requires the markup from
   services-section.html and relies on the global showPage() function
   already defined elsewhere in the site's JS. */

/* ── SERVICE DETAIL DATA ── */
const SERVICE_DETAILS = {
  'solar-installation': {
    title: 'Solar Installation',
    subtitle: 'Complete solar solutions tailored for your home or business.',
    desc: "Our end-to-end solar installation service is designed to help you save on electricity bills while contributing to a cleaner, greener planet. From consultation to system activation, we handle everything for you.",
    included: [
      'Site assessment and energy analysis',
      'Custom system design',
      'Permits and documentation',
      'Professional installation by experienced workers',
      'System testing and activation',
      'Post-installation support'
    ],
    image: 'SUNLIMITED-PICS/19.jpg',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="#F5A800"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" fill="none" stroke="#F5A800" stroke-width="2" stroke-linecap="round"/></svg>`
  },
  'sungrow-distributor': {
    title: 'Sungrow Distributor',
    subtitle: 'Sub distributor of Sungrow inverters and batteries.',
    desc: "As an sub Sungrow distributor, we supply and support industry-leading inverters and battery systems for residential and commercial installations, backed by manufacturer warranties and local technical expertise.",
    included: [
      'Genuine Sungrow inverters and batteries',
      'Product consultation and sizing',
      'Manufacturer-backed warranty',
      'Local stock and fast fulfillment',
      'Technical and installation support',
      'Firmware updates and monitoring setup'
    ],
    image: 'sunlimited pics/23.jpg',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#F5A800"/></svg>`
  },
  'hybrid-solar-battery': {
    title: 'Hybrid Solar + Battery Systems',
    subtitle: 'Smart energy storage for uninterrupted power.',
    desc: "Our hybrid solar and battery systems store excess solar energy so you stay powered during brownouts and grid outages, while maximizing self-consumption and reducing reliance on the grid.",
    included: [
      'Hybrid inverter and battery sizing',
      'Seamless backup power switching',
      'Smart energy management setup',
      'Battery installation and commissioning',
      'Ongoing performance monitoring'
    ],
    image: 'SUNLIMITED-PICS/24.jpg',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24"><rect x="2" y="7" width="18" height="11" rx="2" fill="none" stroke="#F5A800" stroke-width="2"/><path d="M22 11v3" stroke="#F5A800" stroke-width="2" stroke-linecap="round"/><path d="M6 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" fill="none" stroke="#F5A800" stroke-width="2"/><line x1="7" y1="12" x2="7" y2="14" stroke="#F5A800" stroke-width="2" stroke-linecap="round"/><line x1="11" y1="12" x2="11" y2="14" stroke="#F5A800" stroke-width="2" stroke-linecap="round"/></svg>`
  },
  'warranty-support': {
    title: 'Warranty & After-Sales Support',
    subtitle: 'Reliable maintenance to keep your system running at its best.',
    desc: "We stand behind every installation with comprehensive warranty coverage and responsive after-sales support, including routine maintenance and fast troubleshooting whenever you need it.",
    included: [
      'Manufacturer and workmanship warranty',
      'Scheduled maintenance visits',
      'Priority troubleshooting and repairs',
      'Panel cleaning and inspection',
      'System performance reviews',
      'Dedicated customer support line'
    ],
    image: 'SUNLIMITED-PICS/21.jpg',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  }
};

const CHECK_ICON = `<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#F5A800"/><path d="M7 12.5l3 3 7-7" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function buildIncludedList(items) {
  return items.map(item => `<li>${CHECK_ICON}<span>${item}</span></li>`).join('');
}

function openServiceDetail(id) {
  const data = SERVICE_DETAILS[id];
  const overlay = document.getElementById('svcModalOverlay');
  if (!data || !overlay) return;

  document.getElementById('svcDetailIcon').innerHTML = data.icon;
  document.getElementById('svcDetailTitle').textContent = data.title;
  document.getElementById('svcDetailSub').textContent = data.subtitle;
  document.getElementById('svcDetailDesc').textContent = data.desc;
  document.getElementById('svcDetailList').innerHTML = buildIncludedList(data.included);
  document.getElementById('svcDetailImg').src = data.image;
  document.getElementById('svcDetailImg').alt = data.title;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // lock background scroll while popup is open
}

function closeServiceDetail() {
  const overlay = document.getElementById('svcModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(event) {
  // Close only when the dark backdrop itself is clicked, not the modal content
  if (event.target.id === 'svcModalOverlay') {
    closeServiceDetail();
  }
}

// Close on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeServiceDetail();
});