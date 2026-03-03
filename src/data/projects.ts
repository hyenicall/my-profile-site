import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 0,
    title: 'E-Commerce Dashboard',
    description:
      '실시간 데이터 시각화와 주문 관리 기능을 갖춘 이커머스 관리자 대시보드입니다. 반응형 디자인으로 모바일에서도 최적화되어 있습니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    role: 'UI 컴포넌트 설계 및 구현, Chart.js를 활용한 데이터 시각화, REST API 연동 및 상태 관리, 반응형 레이아웃 개발을 담당했습니다.',
    image: 'https://picsum.photos/seed/dashboard/600/400',
    github: '#',
    live: '#',
    background:
      '이커머스 플랫폼의 관리자 도구가 레거시 시스템에 의존하고 있어, 실시간 데이터 확인과 주문 처리 속도가 느린 문제를 해결하고자 시작한 프로젝트입니다.',
    decisions:
      'Chart.js를 선택한 이유는 가볍고 커스터마이징이 용이하며, React 래퍼 라이브러리가 성숙해 통합이 수월했기 때문입니다. 상태 관리는 React Query로 서버 상태와 클라이언트 상태를 분리했습니다.',
    results:
      '관리자 업무 처리 시간 35% 단축, 실시간 매출 모니터링으로 의사결정 속도 향상.',
  },
  {
    id: 1,
    title: 'Real-time Chat App',
    description:
      'WebSocket을 활용한 실시간 채팅 애플리케이션으로, 1:1 채팅과 그룹 채팅, 파일 공유 기능을 제공합니다.',
    tags: ['Next.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
    role: '실시간 메시지 시스템 설계, Socket.io 기반 양방향 통신 구현, 채팅 UI/UX 디자인 및 개발, Prisma를 활용한 데이터 모델링을 담당했습니다.',
    image: 'https://picsum.photos/seed/chat/600/400',
    github: '#',
    live: '#',
    background:
      '기존 폴링 방식의 채팅 시스템을 WebSocket 기반으로 전환하여 메시지 지연 문제를 근본적으로 해결하고자 했습니다.',
    decisions:
      'Socket.io를 선택한 이유는 자동 재연결, 룸 관리 등 프로덕션에 필요한 기능이 내장되어 있어 개발 속도를 높일 수 있었기 때문입니다.',
    results:
      '메시지 전달 지연 95% 감소(2초 → 100ms 이하), 읽음 확인 기능으로 사용자 만족도 향상.',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'OpenWeather API를 활용한 날씨 대시보드입니다. 위치 기반 날씨 정보, 5일 예보, 대기질 정보를 제공합니다.',
    tags: ['Vue.js', 'Pinia', 'OpenWeather API'],
    role: 'Vue 3 Composition API 기반 컴포넌트 설계, Pinia 상태 관리, 외부 API 연동 및 에러 핸들링, 위치 기반 서비스 구현을 담당했습니다.',
    image: 'https://picsum.photos/seed/weather/600/400',
    github: '#',
    live: '#',
    background:
      '다양한 날씨 데이터를 직관적으로 확인할 수 있는 대시보드를 만들어, 날씨 정보 접근성을 높이고자 시작한 사이드 프로젝트입니다.',
    decisions:
      'Vue 3의 Composition API와 Pinia를 조합하여 상태 관리의 복잡도를 낮추고, 컴포넌트 간 데이터 흐름을 명확하게 설계했습니다.',
    results:
      '일평균 사용자 500명 달성, PWA 지원으로 모바일에서도 네이티브 앱 수준의 경험 제공.',
  },
  {
    id: 3,
    title: 'Portfolio Template Builder',
    description:
      '드래그 앤 드롭으로 포트폴리오 웹사이트를 만들 수 있는 노코드 빌더입니다. 다양한 템플릿과 커스터마이징 옵션을 제공합니다.',
    tags: ['React', 'DnD Kit', 'Zustand', 'Framer Motion'],
    role: '드래그 앤 드롭 인터랙션 설계 및 구현, Zustand 기반 글로벌 상태 관리, Framer Motion 애니메이션 시스템 구축, 템플릿 엔진 개발을 담당했습니다.',
    image: 'https://picsum.photos/seed/design/600/400',
    github: '#',
    live: '#',
    background:
      '비개발자도 쉽게 포트폴리오를 만들 수 있는 도구를 제공하여, 진입 장벽을 낮추고자 시작한 프로젝트입니다.',
    decisions:
      'DnD Kit을 선택한 이유는 접근성(a11y) 지원이 우수하고, 커스텀 드래그 로직 구현이 유연했기 때문입니다. Zustand는 보일러플레이트가 적어 빠른 개발에 적합했습니다.',
    results:
      '베타 출시 후 200명 이상의 사용자가 포트폴리오를 생성, 평균 제작 시간 30분 이하 달성.',
  },
];
