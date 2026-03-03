import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    company: '클라우드 인프라 기업',
    role: 'Frontend Engineer (FE Lead)',
    period: '2025.02 — 현재',
    location: '서울',
    details: [
      'React + TypeScript 기반 클라우드 인프라 관리 플랫폼 프론트엔드 설계 및 개발',
      'Zustand · React Query를 활용한 상태 관리 아키텍처 설계',
      '공통 컴포넌트 라이브러리 구축 및 디자인 시스템 운영',
      'GitHub Actions 기반 CI/CD 파이프라인 구축 및 배포 자동화',
    ],
  },
  {
    company: 'WebRTC 솔루션 기업',
    role: 'Frontend Developer',
    period: '2021.08 — 2025.01',
    location: '서울',
    details: [
      'WebRTC 기반 화상회의 솔루션 3개 제품(Hyper Meeting, WAPL Meeting, GAIA Meeting) 프론트엔드 개발',
      'React + TypeScript 기반 SPA 아키텍처 설계 및 대규모 리팩토링 주도',
      'MobX · styled-components · React Native 등 다양한 기술 스택 활용',
      'i18next 기반 다국어 지원 시스템 구축 (한/영/일)',
      'Jenkins · GitLab CI/CD를 활용한 빌드 및 배포 프로세스 개선',
    ],
  },
];
