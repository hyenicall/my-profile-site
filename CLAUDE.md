# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

레트로 90년대 브라우저 스타일의 개인 포트폴리오 사이트. React + TypeScript + Vite로 마이그레이션 진행 중이며, 기존 정적 HTML/CSS/JS 버전(`index.html`, `css/`, `js/`)이 레퍼런스로 남아 있다. PRD(`prd.md`)에 전체 요구사항이 정의되어 있다.

## 개발 명령어

```bash
npm run dev       # Vite 개발 서버 시작
npm run build     # tsc -b && vite build (타입 체크 + 프로덕션 빌드)
npm run lint      # eslint .
npm run preview   # 빌드 결과 프리뷰 서버
```

## 아키텍처

### 현재 상태: 마이그레이션 중

**레거시 (레퍼런스):** `index.html` + `css/style.css` + `js/main.js` — 완성된 정적 버전. 디자인과 인터랙션의 기준점.

**신규 (React):** `src/` 디렉토리 — Vite + React 19 + TypeScript 기반. 디렉토리 구조만 생성된 상태:

```
src/
  app/           # 앱 진입점 (App.tsx 등)
  components/
    layout/      # RetroBrowser, Titlebar, Navbar, Footer
    sections/    # Hero, About, Skills, Projects, Experience, Contact
    ui/          # 공통 UI (버튼, 모달 등)
  context/       # ThemeContext 등
  data/          # 프로젝트, 스킬 등 하드코딩 데이터
  hooks/         # 커스텀 훅 (useTheme, useIntersectionObserver 등)
  styles/        # 글로벌 CSS, CSS 변수
  types/         # TypeScript 타입 정의
```

### 싱글 페이지 구조

React Router 미사용. 해시 기반 앵커 내비게이션 (`#hero`, `#about` 등) + 스무스 스크롤. 전체 페이지를 `RetroBrowser` 컴포넌트가 감싸는 구조.

### 외부 의존성 (CDN)

Tailwind CSS, Font Awesome 6.5.1, Google Fonts (Press Start 2P, IBM Plex Mono), Pretendard. PRD에서 Framer Motion 추가 예정.

## 디자인 시스템

**레트로 픽셀 스타일** — 기존 `css/style.css`의 디자인을 그대로 유지해야 한다:
- 각진 테두리 (`border-radius: 0`), 픽셀 3D 오프셋 그림자 (`box-shadow: Npx Npx 0 0`)
- 제목/라벨: `Press Start 2P`, 본문: `IBM Plex Mono` / `Pretendard`
- 체크무늬 도트 배경, 대시 디바이더, 스캔라인 오버레이

**테마**: CSS 변수 기반 라이트/다크 모드. `data-theme` 속성으로 전환. `localStorage`의 `theme-preference` 키로 유지. `prefers-color-scheme` 자동 반영.

**컬러 토큰**: `--outer-bg`, `--window-bg`, `--text-primary`, `--accent`, `--pixel-shadow` 등 25개+ CSS 변수. 라이트는 살구색(`#f5a68c`) 배경 + 레드(`#e05030`) 액센트, 다크는 딥 퍼플(`#1a0a2e`) 배경 + 오렌지(`#ff6b4a`) 액센트.

**반응형**: 1024px (태블릿), 768px (모바일, 프레임/그림자 제거), 480px (소형 모바일).

## 코드 컨벤션

- CSS 클래스: BEM 스타일 (`.retro-browser__titlebar`)
- CSS 변수: `--kebab-case`
- JS/TS 함수: `camelCase`
- 컴포넌트: `PascalCase`
- TypeScript strict 모드 활성화 (`noUnusedLocals`, `noUnusedParameters`)
- ESLint: `typescript-eslint` + `react-hooks` + `react-refresh`

## 주요 인터랙션 패턴 (레거시 기준, React로 재구현 필요)

- `IntersectionObserver`로 스크롤 트리거 등장 애니메이션 + 활성 내비게이션 링크
- 프로젝트 모달: DOM classList 토글 → React에서는 상태 기반 + Framer Motion AnimatePresence
- 타이핑 애니메이션: 직함 순환 표시
- 버튼 호버: 그림자 오프셋 증가, 클릭: 감소 (눌림 효과)

## 콘텐츠

- 언어: 한국어 (`lang="ko"`)
- 프로젝트/경력 데이터: `Experience.docx` 참조하여 구성
- 플레이스홀더 이미지: `picsum.photos`
