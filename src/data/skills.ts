import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'TypeScript', icon: 'TS', isTextIcon: true },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
      { name: 'styled-components', icon: '💅', isTextIcon: true },
    ],
  },
  {
    title: 'State & Data',
    skills: [
      { name: 'Zustand', icon: '🐻', isTextIcon: true },
      { name: 'React Query', icon: '', imageUrl: 'https://cdn.simpleicons.org/reactquery' },
      { name: 'MobX', icon: '', imageUrl: 'https://cdn.simpleicons.org/mobx' },
    ],
  },
  {
    title: 'Infra & Tools',
    skills: [
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
      { name: 'GitLab CI/CD', icon: 'fa-brands fa-gitlab' },
      { name: 'Jenkins', icon: 'fa-brands fa-jenkins' },
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'WebRTC', icon: 'fa-solid fa-video' },
      { name: 'React Native', icon: 'fa-brands fa-react' },
      { name: 'i18next', icon: 'i18n', isTextIcon: true },
      { name: 'Vite', icon: 'fa-solid fa-bolt', isTextIcon: true },
      { name: 'ESLint', icon: 'fa-solid fa-broom', isTextIcon: true },
    ],
  },
];
