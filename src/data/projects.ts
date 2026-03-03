import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 0,
    title: '클라우드 인프라 관리 플랫폼',
    description:
      'VM·네트워크·스토리지·Kubernetes를 통합 관리하는 클라우드 인프라 플랫폼. admin/project 이중 권한 체계 + 165개+ 라우트 + ko/en/ja 3개국어를 단일 SPA로 운영하는 구조적 복잡도를 가진 서비스.',
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
  },
  {
    id: 1,
    title: 'Hyper Meeting',
    description:
      '다른 서비스에 종속되지 않는 독립형 WebRTC 화상회의 웹/모바일 서비스. 교육형·토론형 등 고객사 니즈에 맞게 커스터마이징 대응하며 인사혁신처·서울시교육청 등 공공기관에 납품.',
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
  },
  {
    id: 2,
    title: 'WAPL Meeting',
    description:
      '사내 업무 메신저 WAPL에 통합된 화상회의 서비스. 기존 그룹 톡방 멤버 기반으로 별도 앱 전환 없이 원클릭으로 미팅을 생성·진행할 수 있는 인앱 서비스.',
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
  },
  {
    id: 3,
    title: 'GAIA Meeting',
    description:
      '업무 협업 툴 GAIA에 통합된 인앱 화상회의 서비스. 다양한 디바이스와 네트워크 환경에서 안정적으로 작동하며 예약·일정관리·녹화 등 엔터프라이즈급 기능을 제공.',
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
  },
];