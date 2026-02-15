// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initTypingAnimation();
  initBackToTop();
  initActiveNavLink();
  initProjectModal();
});

// ===== Theme Toggle =====
function initThemeToggle() {
  const html = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle, .theme-toggle--nav');
  const STORAGE_KEY = 'theme-preference';

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateIcons(theme) {
    const icon = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
    toggles.forEach(btn => {
      const iconEl = btn.querySelector('.theme-toggle__icon');
      if (iconEl) iconEl.textContent = icon;
    });
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    updateIcons(theme);
  }

  // Determine initial theme
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialTheme = saved || getSystemTheme();
  applyTheme(initialTheme);

  // Toggle click
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || getSystemTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  });

  // Listen for system theme changes (only when no manual preference saved)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// ===== Navbar Scroll Effect =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== Mobile Menu =====
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===== Active Nav Link on Scroll =====
function initActiveNavLink() {
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section.getAttribute('id')) {
      observer.observe(section);
    }
  });
}

// ===== Scroll Reveal Animation =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

// ===== Typing Animation =====
function initTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const texts = [
    'Frontend Developer',
    'UI/UX Enthusiast',
    'Creative Coder',
    'Problem Solver',
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const currentText = texts[textIndex];

    if (isPaused) {
      isPaused = false;
      isDeleting = true;
      setTimeout(type, 50);
      return;
    }

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300);
        return;
      }

      setTimeout(type, 40);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isPaused = true;
        setTimeout(type, 2000);
        return;
      }

      setTimeout(type, 80);
    }
  }

  setTimeout(type, 1200);
}

// ===== Project Modal =====
const projectData = [
  {
    title: 'E-Commerce Dashboard',
    description: '실시간 데이터 시각화와 주문 관리 기능을 갖춘 이커머스 관리자 대시보드입니다. 반응형 디자인으로 모바일에서도 최적화되어 있으며, Chart.js를 활용한 매출 분석 차트, 실시간 주문 알림, 재고 관리 등 종합적인 어드민 기능을 제공합니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    role: 'UI 컴포넌트 설계 및 구현, Chart.js를 활용한 데이터 시각화, REST API 연동 및 상태 관리, 반응형 레이아웃 개발을 담당했습니다.',
    image: 'https://picsum.photos/seed/dashboard/720/400',
    github: '#',
    live: '#',
  },
  {
    title: 'Real-time Chat App',
    description: 'WebSocket을 활용한 실시간 채팅 애플리케이션으로, 1:1 채팅과 그룹 채팅, 파일 공유 기능을 제공합니다. 읽음 확인, 타이핑 인디케이터, 이모지 리액션 등 풍부한 채팅 경험을 구현했습니다.',
    tags: ['Next.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
    role: '실시간 메시지 시스템 설계, Socket.io 기반 양방향 통신 구현, 채팅 UI/UX 디자인 및 개발, Prisma를 활용한 데이터 모델링을 담당했습니다.',
    image: 'https://picsum.photos/seed/chat/720/400',
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'OpenWeather API를 활용한 날씨 대시보드입니다. 위치 기반 날씨 정보, 5일 예보, 대기질 정보를 제공하며, 직관적인 UI로 다양한 날씨 데이터를 한눈에 확인할 수 있습니다.',
    tags: ['Vue.js', 'Pinia', 'OpenWeather API'],
    role: 'Vue 3 Composition API 기반 컴포넌트 설계, Pinia 상태 관리, 외부 API 연동 및 에러 핸들링, 위치 기반 서비스 구현을 담당했습니다.',
    image: 'https://picsum.photos/seed/weather/720/400',
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Template Builder',
    description: '드래그 앤 드롭으로 포트폴리오 웹사이트를 만들 수 있는 노코드 빌더입니다. 다양한 템플릿과 커스터마이징 옵션을 제공하며, 실시간 미리보기와 원클릭 배포 기능을 지원합니다.',
    tags: ['React', 'DnD Kit', 'Zustand', 'Framer Motion'],
    role: '드래그 앤 드롭 인터랙션 설계 및 구현, Zustand 기반 글로벌 상태 관리, Framer Motion 애니메이션 시스템 구축, 템플릿 엔진 개발을 담당했습니다.',
    image: 'https://picsum.photos/seed/design/720/400',
    github: '#',
    live: '#',
  },
];

function initProjectModal() {
  const overlay = document.getElementById('projectModal');
  if (!overlay) return;

  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalTags = document.getElementById('modalTags');
  const modalRole = document.getElementById('modalRole');
  const modalLinks = document.getElementById('modalLinks');
  const closeBtn = overlay.querySelector('.modal-close');

  function openModal(index) {
    const data = projectData[index];
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalTags.innerHTML = data.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    modalRole.textContent = data.role;
    modalLinks.innerHTML = `
      <a href="${data.github}" class="modal-link-github"><i class="fa-brands fa-github"></i> GitHub</a>
      <a href="${data.live}" class="modal-link-live"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
    `;

    overlay.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // Card click -> open modal
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-links a')) return;
      const index = parseInt(card.getAttribute('data-project'), 10);
      openModal(index);
    });
  });

  // Close button
  closeBtn.addEventListener('click', closeModal);

  // Overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// ===== Back to Top =====
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
