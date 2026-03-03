import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    company: 'ABC Tech',
    role: 'Senior Frontend Developer',
    period: '2023.03 — 현재',
    location: '서울',
    details: [
      'React/Next.js 기반 B2B SaaS 플랫폼 프론트엔드 개발',
      '디자인 시스템 구축 및 컴포넌트 라이브러리 관리',
      '웹 성능 최적화로 LCP 40% 개선',
      '주니어 개발자 멘토링 및 코드 리뷰',
    ],
  },
  {
    company: 'XYZ Studio',
    role: 'Frontend Developer',
    period: '2021.06 — 2023.02',
    location: '서울',
    details: [
      'Vue.js 기반 이커머스 플랫폼 프론트엔드 개발',
      '결제 시스템 연동 및 장바구니 기능 구현',
      '모바일 퍼스트 반응형 웹 개발',
      'A/B 테스트를 통한 전환율 25% 향상',
    ],
  },
  {
    company: 'StartUp Inc.',
    role: 'Junior Frontend Developer',
    period: '2020.01 — 2021.05',
    location: '서울',
    details: [
      'React 기반 사내 관리 도구 프론트엔드 개발',
      'REST API 연동 및 상태 관리 설계',
      'UI/UX 디자이너와 협업하여 사용자 인터페이스 개선',
    ],
  },
];
