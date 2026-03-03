# ROADMAP — 포트폴리오 사이트 React 마이그레이션

정적 HTML/CSS/JS → React 19 + TypeScript + Vite 마이그레이션 로드맵.
기존 레트로 90년대 브라우저 디자인을 정확히 유지하면서 React 컴포넌트 구조로 전환한다.

---

## Phase 1: 프로젝트 스캐폴딩

### Task 1. 의존성 설치 및 Tailwind CSS 설정
- **설치**: `framer-motion` (runtime), `tailwindcss postcss autoprefixer` (dev)
- **설정 파일 생성**: `tailwind.config.ts`, `postcss.config.js`
- **Vite index.html 수정**:
  - `<div id="root"></div>` 추가
  - Font Awesome 6.5.1 CDN
  - Google Fonts (Press Start 2P, IBM Plex Mono) CDN
  - Pretendard 폰트 CDN
  - Favicon (👾 이모지 SVG)
  - `lang="ko"` 설정
- **검증**: `npm run build` 성공

### Task 2. 글로벌 CSS 마이그레이션
- `css/style.css` (1641줄) → `src/styles/global.css`로 이동
- 파일 상단에 Tailwind 디렉티브 (`@tailwind base/components/utilities`) 추가
- 폰트 `@import` 2줄 제거 (CDN으로 대체됨)
- 포함 내용: CSS 변수 (라이트/다크 25개+), 베이스 스타일, 모든 컴포넌트 스타일, `@keyframes` 4개, `.reveal/.visible`, 반응형 미디어 쿼리 3개
- 컴포넌트별 분리하지 않음 — BEM 네이밍으로 충돌 없음
- **검증**: CSS 변수, keyframes, 미디어 쿼리 모두 포함

### Task 3. 앱 진입점 + ThemeContext + 타입 정의
- **생성 파일**:
  - `src/app/main.tsx` — ReactDOM.createRoot, global.css import
  - `src/app/App.tsx` — ThemeProvider로 감싼 빈 셸
  - `src/context/ThemeContext.tsx` — data-theme 전환, localStorage, prefers-color-scheme 감지
  - `src/types/index.ts` — Project, Skill, SkillCategory, Experience 인터페이스
- **ThemeContext API**: `theme: 'light' | 'dark'`, `toggleTheme: () => void`
- **참조**: `js/main.js` initThemeToggle (15-58줄)
- **검증**: `npm run dev` 빈 페이지 렌더링, 테마 토글 동작, localStorage 저장

---

## Phase 2: 핵심 섹션 구현

### Task 4. RetroBrowser 레이아웃 + Navbar
- **컴포넌트**:
  - `src/components/layout/RetroBrowser.tsx` — 브라우저 프레임 + Titlebar (빨/노/초 dots, 제목, 테마 토글)
  - `src/components/layout/Navbar.tsx` — 스티키, 해시 링크 5개, 스크롤 시 scrolled 클래스, 햄버거 메뉴, 모바일 메뉴 오버레이
- **App.tsx 업데이트**: `<RetroBrowser><Navbar />{sections}</RetroBrowser>`
- **참조**: `js/main.js` initNavbar, initMobileMenu, initSmoothScroll (60-105줄)
- **검증**: 프레임 렌더링, 테마 토글, 해시 내비, 모바일 메뉴 (768px 이하)

### Task 5. Hero 섹션
- **컴포넌트**:
  - `src/components/sections/Hero.tsx` — 아바타(👾), 말풍선, 이름, 타이핑 텍스트, CTA 버튼, 스크롤 인디케이터
  - `src/hooks/useTypingAnimation.ts` — 타이핑/삭제/일시정지 순환 커스텀 훅
- **애니메이션**: Framer Motion stagger 진입, CSS @keyframes (pixelBounce, blink, scrollBounce)
- **타이핑 텍스트**: `['Frontend Developer', 'UI/UX Enthusiast', 'Creative Coder', 'Problem Solver']`
- **참조**: `js/main.js` initTypingAnimation (162-215줄)
- **검증**: 타이핑 애니메이션 순환, Framer Motion 진입, CTA 스무스 스크롤

### Task 6. About + Skills 섹션
- **컴포넌트**:
  - `src/components/sections/About.tsx` — 프로필 이미지, 소개, 정보 그리드, 자격증(CKA/AWS SAA/정보처리기사), 수상(빅스비 챌린지)
  - `src/components/sections/Skills.tsx` — 카테고리별 스킬 그리드 (Frontend, Tools, DevOps, Others)
  - `src/data/skills.ts` — SkillCategory[] 데이터
- **참조**: `index.html` About (104-149줄), Skills (151-276줄)
- **검증**: 정보 그리드, 자격증 배지, 스킬 카드 호버 효과, section--alt 배경

### Task 7. Experience 섹션
- **컴포넌트**:
  - `src/components/sections/Experience.tsx` — 타임라인 (대시 점선 + 사각 도트)
  - `src/data/experience.ts` — Experience[] 데이터
- **참조**: `index.html` Experience (376-431줄)
- **검증**: 타임라인 점선, 3개 경력 항목, 도트 호버 효과

---

## Phase 3: 프로젝트 섹션

### Task 8. 프로젝트 데이터 파일
- **생성**: `src/data/projects.ts` — Project[] 배열
- 레거시 `js/main.js` projectData (218-255줄) 기반
- PRD 모달 추가 필드: `background`, `decisions`, `results`
- 이미지: picsum.photos 플레이스홀더 유지
- **검증**: 4개 프로젝트, 모든 필드 포함, TypeScript 타입 체크 통과

### Task 9. Projects 섹션 + ProjectModal
- **컴포넌트**:
  - `src/components/sections/Projects.tsx` — 프로젝트 그리드 + 모달 상태 관리
  - `src/components/ui/ProjectCard.tsx` — 썸네일, 정보, 태그, 링크
  - `src/components/ui/ProjectModal.tsx` — AnimatePresence, 모달 타이틀바, ESC/오버레이/X 닫기, body 스크롤 잠금
- **참조**: `js/main.js` initProjectModal (257-317줄)
- **검증**: 2열 그리드, 카드 호버, 모달 열기/닫기 (ESC/오버레이/X), body 스크롤 잠금

---

## Phase 4: 마무리

### Task 10. Contact + Footer
- **컴포넌트**:
  - `src/components/sections/Contact.tsx` — 연락처 정보, 소셜 링크, 연락 폼 (UI만, 전송 미구현)
  - `src/components/layout/Footer.tsx` — 저작권 + 맨 위로 버튼
- **참조**: `index.html` Contact + Footer (433-498줄)
- **검증**: 이메일 링크, 소셜 아이콘 호버, 폼 렌더링, 맨 위로 스무스 스크롤

### Task 11. 스크롤 애니메이션 + 활성 내비 + 반응형 + SEO
- **구현**:
  - 각 섹션에 Framer Motion `whileInView` 진입 애니메이션 적용
  - `src/hooks/useActiveNavLink.ts` — IntersectionObserver로 활성 링크 감지
  - 반응형 4개 브레이크포인트 (1024/768/480px) 동작 점검
  - `index.html`에 SEO 메타태그 (og:title, og:description)
- **참조**: `js/main.js` initScrollReveal, initActiveNavLink (108-159줄)
- **검증**: 섹션 진입 애니메이션, 활성 내비 하이라이트, 반응형 레이아웃, `npm run build` 성공

---

## 의존성 그래프

```
T1 → T2 → T3 → T4 → T5 → T6 → T7 ─→ T9 → T10 → T11
                  ↓                       ↑
                  └──── T8 ──────────────┘
```

## 참고 파일

| 파일 | 역할 |
|------|------|
| `prd.md` | 전체 요구사항 문서 |
| `Experience.docx` | 실제 경력/프로젝트 데이터 (추후 교체용) |
| `index.html` | 레거시 HTML 마크업 레퍼런스 |
| `css/style.css` | 레거시 CSS 디자인 레퍼런스 (1641줄) |
| `js/main.js` | 레거시 JS 인터랙션 레퍼런스 (329줄) |
