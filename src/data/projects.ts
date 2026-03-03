import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 0,
    title: '클라우드 인프라 관리 플랫폼',
    description: 'VM·네트워크·K8s 통합 관리, 이중 권한·165개+ 라우트·3개국어를 단일 SPA로 운영',
    tags: ['React 18', 'TypeScript 5', 'Vite 6', 'Zustand 5', 'React Query 5', 'i18next', 'styled-components', 'Docker', 'GitHub Actions'],
    role: '초기 1인 체제로 전체 프론트엔드 아키텍처 설계부터 구현까지 주도. 이후 FE 3인 팀으로 확장 시 온보딩 및 컨벤션 문서화 담당.',
    image: 'https://picsum.photos/seed/cloud-infra/600/400',
    background:
      'admin/project 이중 권한 체계, 165개+ 라우트, 3개국어를 단일 SPA로 안정적으로 운영해야 하는 구조적 복잡도가 과제였습니다. 초기 1인 개발 체제에서 팀 확장을 고려한 확장 가능한 아키텍처 설계가 필요했습니다.',
    decisions: [
      {
        title: '도메인 기반 레이어드 아키텍처',
        content:
          'apis/stores/routes/type/components/pages/hooks 계층 분리 + 14개 Path Alias 도입. createApiClient 팩토리로 23개 도메인 서비스 파일에 일관된 호출 패턴을 적용해 팀 확장 후에도 계층 간 의존성 방향 혼재 없이 유지했습니다.',
      },
      {
        title: '토큰 이중 보안 아키텍처',
        content:
          'Access Token은 JS 모듈 스코프 메모리에 저장해 XSS 탈취 경로를 제거하고, Refresh Token은 HttpOnly Cookie로 관리. isRefreshing 플래그 + WeakSet 패턴으로 동시 401 발생 시 재발급 요청을 1회로 수렴해 Race Condition을 방지했습니다.',
      },
      {
        title: '번들 최적화 — Manual Chunks 20개 청크 전략',
        content:
          'vendor 5종 + admin 도메인 8종 + project 도메인 7종으로 총 20개 청크 분리. 165개+ 라우트 전면 React.lazy() 적용으로 초기 진입 시 현재 도메인 외 번들을 완전히 제거했습니다.',
      },
    ],
    results: [
      '초기 JS 번들 1.18MB → 657KB (−44.3%) 감소',
      '165개+ 라우트를 PrivateRoute 단일 지점에서 3단계 권한 검증으로 보호',
      'i18n 키 감사로 미사용 64개·중복 57개 제거, 3,546개 번역 값 정합성 확보',
      'Atomic Design 175개 컴포넌트 체계로 FE 2인 추가 합류 시 온보딩 비용 최소화',
      '단일 Docker 이미지로 dev/staging/prod 전 환경 배포',
    ],
    period: '2025.02 — 현재',
    teamSize: 'FE 1인 → FE 3인',
    highlights: [
      '번들 사이즈 −44.3% 감소',
      '165개+ 라우트 단일 SPA',
      'ko/en/ja 3개국어 지원',
    ],
    techStack: [
      {
        category: 'Core',
        items: [
          { name: 'React 18', detail: 'Concurrent Features 활용' },
          { name: 'TypeScript 5', detail: 'Strict 모드 + Path Alias 14개' },
          { name: 'Vite 6', detail: 'Manual Chunks 20개 청크 전략' },
        ],
      },
      {
        category: 'State Management',
        items: [
          { name: 'Zustand 5', detail: '도메인별 스토어 분리' },
          { name: 'React Query 5', detail: '서버 상태 캐싱 + 낙관적 업데이트' },
        ],
      },
      {
        category: 'Styling & i18n',
        items: [
          { name: 'styled-components', detail: '테마 토큰 기반 디자인 시스템' },
          { name: 'i18next', detail: '3,546개 번역 키 관리' },
        ],
      },
      {
        category: 'Infra & CI/CD',
        items: [
          { name: 'Docker', detail: '단일 이미지 멀티 환경 배포' },
          { name: 'GitHub Actions', detail: 'PR 기반 자동 빌드·린트 파이프라인' },
        ],
      },
    ],
    architecture: [
      {
        title: '레이어드 아키텍처 디렉토리 구조',
        type: 'diagram',
        content:
`src/
├── apis/          # API 클라이언트 (createApiClient 팩토리)
│   └── 23개 도메인 서비스 파일
├── stores/        # Zustand 도메인별 스토어
├── routes/        # 165개+ 라우트 정의 + PrivateRoute
├── types/         # DTO 인터페이스
├── components/    # Atomic Design (175개)
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── pages/         # admin/ + project/ 이중 구조
└── hooks/         # 공통 커스텀 훅`,
      },
      {
        title: '토큰 이중 보안 인증 플로우',
        type: 'text',
        content:
          'Access Token은 JS 모듈 스코프 메모리에 저장하여 XSS 탈취 경로를 차단하고, Refresh Token은 HttpOnly Cookie로 관리합니다. 동시 401 발생 시 isRefreshing 플래그 + failedQueue 패턴으로 재발급 요청을 1회로 수렴시켜 Race Condition을 방지합니다.',
      },
    ],
    challenges: [
      {
        problem: '초기 JS 번들 1.18MB로 진입 속도 저하',
        approach: 'vendor 5종 + admin 8종 + project 7종 총 20개 Manual Chunks 분리, 165개+ 라우트 전면 React.lazy() 적용',
        outcome: '초기 번들 1.18MB → 657KB (−44.3%), 현재 도메인 외 번들 완전 제거',
      },
      {
        problem: 'i18n 키 3,546개의 정합성 관리 불가',
        approach: '커스텀 감사 스크립트로 미사용·중복·누락 키 자동 탐지, CI 파이프라인에 검증 단계 추가',
        outcome: '미사용 64개·중복 57개 제거, 3개국어 번역 값 정합성 확보',
      },
    ],
    contributions: [
      {
        area: '아키텍처 설계',
        description: '도메인 기반 레이어드 아키텍처와 14개 Path Alias 체계를 초기 1인 체제에서 설계',
        impact: '팀 3인 확장 시 계층 간 의존성 방향 혼재 없이 온보딩 비용 최소화',
      },
      {
        area: '번들 최적화',
        description: 'Manual Chunks 전략 수립 및 React.lazy() 전면 적용',
        impact: '초기 번들 44.3% 감소, 사용자 진입 속도 체감 개선',
      },
      {
        area: '인증 보안',
        description: 'Access Token 메모리 저장 + Refresh Token HttpOnly Cookie 이중 보안 설계',
        impact: 'XSS 탈취 경로 제거 및 동시 401 Race Condition 방지',
      },
      {
        area: '팀 확장 지원',
        description: 'Atomic Design 175개 컴포넌트 체계 + 컨벤션 문서화',
        impact: 'FE 2인 추가 합류 시 일주일 내 독립 개발 가능',
      },
    ],
    lessonsLearned: [
      '1인 개발이라도 "팀이 올 것"을 전제로 설계하면 확장 비용이 극적으로 줄어든다.',
      '번들 최적화는 빌드 설정 하나가 아닌, 라우팅·코드 분할·청크 전략의 조합이 핵심이다.',
      'i18n 키 관리는 초기부터 자동화 감사 체계를 만들지 않으면 기술 부채가 기하급수적으로 증가한다.',
    ],
  },
  {
    id: 3,
    title: 'GAIA Meeting',
    description: 'GAIA 협업 툴 인앱 화상회의 — 다중 뷰 시스템, 주화자 감지, 예약·녹화 지원',
    tags: ['React', 'TypeScript', 'MobX', 'WebRTC', 'Docker', 'GitLab', 'Jenkins'],
    role: '서버-클라이언트 DTO 인터페이스 설계, 다중 뷰 시스템 구현, 미팅 일정관리(예약·반복예약), 주화자 감지, PIP 화면, 녹화 기능 구현 담당.',
    image: 'https://picsum.photos/seed/gaia-meeting/600/400',
    background:
      '업무 협업 툴 내에서 손쉽게 접근 가능한 화상회의 기능이 필요했습니다. 참여자 수 변동에 따른 동적 레이아웃 최적화와 미팅·캘린더·룸 3가지 정책 간 충돌 방지가 핵심 과제였습니다.',
    decisions: [
      {
        title: '다중 뷰 시스템 — 참여자 수 기반 리소스 최적화',
        content:
          '메인 뷰(호스트/주화자 고정) / 포커스 뷰(메인+서브 세로 스크롤) / 그리드 뷰(바둑판 페이지) 3가지 뷰를 구현했습니다. 현재 뷰에 필요한 스트림만 활성화해 다수 참여자 접속 시 클라이언트 CPU/메모리 리소스 낭비를 방지했습니다.',
      },
      {
        title: 'Git 기반 타입 공유 체계 — 서버/클라이언트 타입 동기화',
        content:
          '미팅 서버 DB 테이블 구조를 고려한 DTO 인터페이스를 설계하고, Git을 통해 서버와 클라이언트가 타입 변경사항을 실시간으로 공유하는 체계를 구축했습니다. 타입 불일치로 인한 런타임 오류를 사전에 차단했습니다.',
      },
    ],
    results: [
      '메인·포커스·그리드 3가지 뷰 전환으로 다수 참여자 환경 최적화',
      '주화자 감지 기반 자동 뷰 전환 및 drag-and-drop PIP 화면 구현',
      '미팅·캘린더·룸 3중 정책 충돌 방지 인터페이스 설계',
      '농어촌공사·서울시교육청·LH공사 납품',
    ],
    period: '2023.12 — 2025.01',
    teamSize: 'FE 4인 / BE 3인 / 미디어서버 2인',
    highlights: [
      '3가지 뷰 시스템 구현',
      '주화자 감지 + PIP',
      'Git 기반 타입 동기화',
    ],
    techStack: [
      {
        category: 'Core',
        items: [
          { name: 'React', detail: '함수형 컴포넌트 + Hooks' },
          { name: 'TypeScript', detail: 'Git 공유 DTO 인터페이스' },
        ],
      },
      {
        category: 'State & Real-time',
        items: [
          { name: 'MobX', detail: '뷰 전환 상태 + 참여자 스트림 관리' },
          { name: 'WebRTC', detail: 'SFU 기반, 뷰별 선택적 스트림 활성화' },
          { name: 'WebSocket', detail: '시그널링 + 주화자 감지 이벤트' },
        ],
      },
      {
        category: 'Infra',
        items: [
          { name: 'Docker', detail: '컨테이너 기반 배포' },
          { name: 'Jenkins', detail: 'GitLab 연동 CI/CD' },
        ],
      },
    ],
    architecture: [
      {
        title: '다중 뷰 시스템',
        type: 'diagram',
        content:
`┌─────────────────────────────────────────┐
│           View Controller               │
├──────────┬──────────┬───────────────────┤
│ Main View│Focus View│    Grid View      │
│(호스트/  │(메인+서브│  (바둑판 페이지)   │
│ 주화자)  │세로스크롤│                   │
├──────────┴──────────┴───────────────────┤
│      Stream Manager (선택적 활성화)      │
│  현재 뷰에 필요한 스트림만 subscribe     │
├─────────────────────────────────────────┤
│        WebRTC SFU Media Server          │
└─────────────────────────────────────────┘`,
      },
      {
        title: 'Git 기반 타입 공유 체계',
        type: 'text',
        content:
          '미팅 서버 DB 테이블 구조를 반영한 DTO 인터페이스를 별도 패키지로 관리하고, Git submodule을 통해 서버/클라이언트가 타입 변경사항을 실시간 공유합니다. 타입 변경 시 양측 빌드 파이프라인에서 자동 검증하여 런타임 타입 불일치를 사전 차단합니다.',
      },
    ],
    challenges: [
      {
        problem: '뷰 전환 시(Main→Grid→Focus) 참여자 수에 따라 레이아웃이 깨지는 현상',
        approach: '뷰별 독립 레이아웃 엔진 설계 + 참여자 수 구간별 최적 그리드 계산 로직 구현',
        outcome: '1~49명 참여자까지 뷰 전환 시 레이아웃 깨짐 없이 부드러운 전환',
      },
      {
        problem: '서버/클라이언트 간 DTO 불일치로 런타임 오류 빈발',
        approach: 'Git submodule로 타입 패키지 공유 + CI에서 양측 빌드 시 타입 검증 자동화',
        outcome: '타입 불일치 런타임 오류 제로 달성',
      },
    ],
    contributions: [
      {
        area: 'DTO 인터페이스 설계',
        description: '미팅 서버 DB 구조를 반영한 서버-클라이언트 공용 DTO 인터페이스 설계',
        impact: 'Git 기반 타입 공유로 런타임 타입 오류 제로 달성',
      },
      {
        area: '다중 뷰 시스템',
        description: '메인·포커스·그리드 3가지 뷰와 참여자 수 기반 동적 레이아웃 구현',
        impact: '뷰별 선택적 스트림으로 클라이언트 리소스 최적화',
      },
      {
        area: '주화자 감지 + PIP',
        description: '오디오 레벨 기반 주화자 자동 감지 및 drag-and-drop PIP 화면 구현',
      },
      {
        area: '일정 관리',
        description: '미팅 예약·반복예약 및 3중 정책 충돌 방지 인터페이스 설계',
      },
      {
        area: '문서/영상 공유',
        description: '미디어 서버 연동 .pdf/.mp4 파일 공유 및 다운로드 기능 구현. 참여자 전체에 고화질 동기화',
      },
      {
        area: '녹화',
        description: '미팅 화면·오디오 녹화 후 미디어 서버 저장, 종료 후 재생·다운로드 기능 구현',
      },
    ],
    lessonsLearned: [
      '서버-클라이언트 간 타입 공유는 "약속"이 아닌 "시스템"으로 강제해야 효과가 있다.',
      '다중 뷰 시스템은 각 뷰가 독립적인 레이아웃 엔진을 가져야 뷰 전환 시 안정성을 보장할 수 있다.',
      '실시간 스트림 관리에서는 "필요한 것만 구독"하는 원칙이 성능의 핵심이다.',
    ],
  },
  {
    id: 2,
    title: 'WAPL Meeting',
    description: 'WAPL 메신저 인앱 화상회의 — 톡방 멤버 기반 앱 전환 없는 원클릭 미팅',
    tags: ['React', 'TypeScript', 'MobX', 'WebRTC', 'Docker', 'GitLab', 'Jenkins'],
    role: '참여자 초대 및 미참여자 알림 전송, 미팅 예약·반복예약 일정관리, 캘린더 내 참여자 변동 관리 기능 구현 담당.',
    image: 'https://picsum.photos/seed/wapl-meeting/600/400',
    background:
      '기존 협업 플랫폼에 화상회의 기능이 없어 별도 앱으로 전환해야 하는 불편함이 있었습니다. 그룹 톡방 멤버 기반으로 즉시 미팅을 생성하고 일정을 관리할 수 있는 인앱 서비스가 필요했습니다.',
    decisions: [
      {
        title: '3중 정책 충돌 방지 인터페이스 설계',
        content:
          '미팅 정책·캘린더 정책·룸 정책이 각각 독립적으로 존재하면서 서로 충돌할 수 있는 구조였습니다. 세 정책의 우선순위와 상호작용을 정의한 인터페이스를 설계해 충돌 없이 작동하도록 구현했습니다.',
      },
      {
        title: '참여자 초대 및 미참여자 알림 시스템',
        content:
          '그룹 톡방 내 참여 여부를 관리하고, 미참여자에게 알림 메시지를 전송하는 기능을 구현했습니다. 참여자 변동이 있을 경우 캘린더에서도 즉시 반영되도록 설계했습니다.',
      },
    ],
    results: [
      '협업 플랫폼 내 화상회의 기능 정식 출시',
      '플랫폼 전환 없는 원클릭 미팅 진입 경험 제공',
      '인사혁신처·서울시교육청·농림수산식품교육문화정보원 납품',
    ],
    period: '2021.08 — 2023.12',
    teamSize: 'FE 3인 / BE 2인',
    highlights: [
      '원클릭 미팅 진입',
      '3중 정책 충돌 방지 설계',
      '공공기관 납품',
    ],
    techStack: [
      {
        category: 'Core',
        items: [
          { name: 'React', detail: '기존 WAPL 메신저와 동일 스택' },
          { name: 'TypeScript', detail: 'Strict 모드' },
        ],
      },
      {
        category: 'State & Real-time',
        items: [
          { name: 'MobX', detail: '메신저 상태와 미팅 상태 연동' },
          { name: 'WebRTC', detail: 'SFU 기반 미디어 스트림' },
        ],
      },
      {
        category: 'Infra',
        items: [
          { name: 'Docker', detail: '컨테이너 기반 배포' },
          { name: 'Jenkins', detail: 'GitLab 연동 CI/CD' },
        ],
      },
    ],
    challenges: [
      {
        problem: '미팅 정책·캘린더 정책·룸 정책 3가지가 독립적으로 존재하면서 상호 충돌',
        approach: '세 정책의 우선순위와 상호작용 규칙을 정의한 통합 인터페이스 설계',
        outcome: '정책 간 충돌 없는 일관된 동작 보장',
      },
      {
        problem: '그룹 톡방 참여자와 미팅 참여자 간 실시간 동기화 불일치',
        approach: 'WebSocket 이벤트 기반 참여자 변동 감지 및 캘린더 즉시 반영 로직 구현',
        outcome: '참여자 변동 시 모든 클라이언트에 1초 내 동기화',
      },
    ],
    live: 'https://wapl.ai/',
    contributions: [
      {
        area: '참여자 초대 시스템',
        description: '그룹 톡방 기반 참여 여부 관리 및 미참여자 알림 전송 기능 구현',
        impact: '미팅 참여율 향상에 기여',
      },
      {
        area: '일정 관리',
        description: '미팅 예약·반복예약 일정관리 및 캘린더 내 참여자 변동 관리 기능 구현',
      },
      {
        area: '정책 인터페이스',
        description: '미팅·캘린더·룸 3중 정책 충돌 방지 인터페이스 설계 참여',
      },
    ],
    lessonsLearned: [
      '인앱 서비스는 호스트 앱과의 상태 동기화가 독립 앱보다 훨씬 복잡하며, 초기 설계가 중요하다.',
      '다중 정책 시스템에서는 우선순위 규칙을 문서화하지 않으면 엣지 케이스가 기하급수적으로 증가한다.',
    ],
  },
  {
    id: 1,
    title: 'Hyper Meeting',
    description: '독립형 WebRTC 화상회의 — 고객사 커스터마이징 대응, 공공기관 3곳 납품',
    tags: ['React', 'TypeScript', 'MobX', 'WebRTC', 'styled-components', 'Docker', 'GitLab', 'Jenkins'],
    role: '문서/영상 공유 기능, 참여자 권한관리, 장치관리(카메라·오디오), 반응형 UI 개발 담당. React Native 기반 모바일 앱 버전·배포 관리.',
    image: 'https://picsum.photos/seed/hyper-meeting/600/400',
    background:
      '기업용 화상회의 수요에 대응하여 다른 서비스에 종속되지 않는 독립형 화상회의 솔루션이 필요했습니다. 교육형·토론형 등 고객사별 커스터마이징 요구사항과 PC·태블릿·모바일 전 디바이스 지원이 핵심 과제였습니다.',
    decisions: [
      {
        title: 'MobX 기반 실시간 WebRTC 상태 관리',
        content:
          'WebRTC 미디어 스트림·참여자·권한 상태는 변경이 매우 빈번합니다. MobX의 observable 패턴을 활용해 상태 변경을 컴포넌트에 자동으로 반응형 전파하여, 복잡한 실시간 UI 업데이트를 효율적으로 처리했습니다.',
      },
      {
        title: '미디어 서버 기반 문서/영상 공유',
        content:
          '단순 화면 공유 방식은 화질 저하가 심하고 네트워크 부하가 높습니다. 미디어 서버에 .pdf/.mp4를 업로드 후 변환 이미지를 실시간 배포하는 방식으로, 화질 저하 없이 전 참여자가 동일 페이지를 볼 수 있도록 구현했습니다.',
      },
    ],
    results: [
      '300~500명 동시 접속 부하테스트 안정성 검증',
      '반응형 구현으로 PC·태블릿·스마트폰 전 디바이스 지원',
      'React Native 모바일 앱 iOS/Android 동시 운영',
      '인사혁신처·서울시교육청·농림수산식품교육문화정보원 납품',
    ],
    period: '2021.08 — 2023.12',
    teamSize: 'FE 4인 / BE 3인 / 미디어서버 2인',
    highlights: [
      '300~500명 동시 접속 안정',
      '전 디바이스 반응형 지원',
      '공공기관 3곳 납품',
    ],
    techStack: [
      {
        category: 'Core',
        items: [
          { name: 'React', detail: '클래스 → 함수형 마이그레이션 병행' },
          { name: 'TypeScript', detail: 'Strict 모드' },
        ],
      },
      {
        category: 'State & Real-time',
        items: [
          { name: 'MobX', detail: 'Observable 패턴으로 WebRTC 상태 자동 전파' },
          { name: 'WebRTC', detail: 'SFU 기반 미디어 스트림 관리' },
          { name: 'WebSocket', detail: '시그널링 + 채팅 + 참여자 이벤트' },
        ],
      },
      {
        category: 'Mobile & Styling',
        items: [
          { name: 'React Native', detail: 'iOS/Android 동시 빌드·배포' },
          { name: 'styled-components', detail: '반응형 디바이스 대응' },
        ],
      },
      {
        category: 'Infra',
        items: [
          { name: 'Docker', detail: '컨테이너 기반 배포' },
          { name: 'Jenkins', detail: 'GitLab 연동 CI/CD' },
        ],
      },
    ],
    architecture: [
      {
        title: '미디어 공유 아키텍처',
        type: 'text',
        content:
          '단순 화면 공유 방식의 화질 저하와 네트워크 부하 문제를 해결하기 위해, .pdf/.mp4 파일을 미디어 서버에 업로드 후 변환된 이미지를 실시간 배포하는 방식을 채택했습니다. 발표자가 페이지를 넘기면 WebSocket 이벤트로 전 참여자에게 동일 페이지를 동기화합니다.',
      },
    ],
    live: 'https://hypermeeting.biz/service/',
    challenges: [
      {
        problem: '고객사별(교육형·토론형) 커스터마이징 요구가 빈번하여 코드 분기 증가',
        approach: '기능 모듈을 플러그인 형태로 분리하고, 고객사별 설정 파일로 기능 on/off 제어',
        outcome: '신규 고객사 요구사항 대응 시간 50% 단축, 코드 중복 제거',
      },
      {
        problem: '장치 전환(카메라·마이크) 시 스트림 끊김 현상',
        approach: 'MediaStream 교체 시 기존 트랙을 먼저 정리하고 새 트랙을 안전하게 교체하는 순서 보장 로직 구현',
        outcome: '장치 전환 시 끊김 없는 연속 스트림 제공',
      },
    ],
    contributions: [
      {
        area: '문서/영상 공유',
        description: '미디어 서버 연동 문서/영상 공유 기능 설계 및 구현',
        impact: '화면 공유 대비 화질 유지 + 네트워크 부하 감소',
      },
      {
        area: '참여자 권한관리',
        description: '호스트·발표자·참여자 3단계 권한 체계와 실시간 권한 변경 UI 구현',
      },
      {
        area: '장치 관리',
        description: '카메라·마이크·스피커 전환 및 미디어 스트림 안정화 로직 담당',
      },
      {
        area: '모바일 앱',
        description: 'React Native 기반 iOS/Android 앱 개발 및 스토어 배포 관리',
        impact: '모바일 사용자 접근성 확보',
      },
      {
        area: '반응형 UI',
        description: 'PC·태블릿·스마트폰 전 디바이스 대응 반응형 레이아웃 구현',
      },
    ],
    lessonsLearned: [
      'WebRTC 프로젝트에서 미디어 스트림 생명주기 관리가 안정성의 핵심이다.',
      '고객사 커스터마이징은 초기부터 설정 기반 분기를 설계해야 기술 부채를 줄일 수 있다.',
      '반응형 화상회의 UI는 뷰포트뿐 아니라 참여자 수에 따른 동적 레이아웃이 함께 고려되어야 한다.',
    ],
  },
];