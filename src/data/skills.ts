import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'TypeScript', icon: 'TS', isTextIcon: true },
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'Next.js', icon: 'N', isTextIcon: true },
      { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', isTextIcon: true },
      { name: 'SASS', icon: 'fa-brands fa-sass' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'VS Code', icon: 'fa-solid fa-code', isTextIcon: true },
      { name: 'Figma', icon: 'fa-brands fa-figma' },
      { name: 'Webpack', icon: 'fa-solid fa-cube', isTextIcon: true },
      { name: 'Vite', icon: 'fa-solid fa-bolt', isTextIcon: true },
      { name: 'Jira', icon: 'fa-solid fa-list-check' },
      { name: 'Confluence', icon: 'fa-solid fa-book' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Kubernetes', icon: 'fa-solid fa-dharmachakra' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'REST API', icon: 'fa-solid fa-plug', isTextIcon: true },
      { name: 'Responsive', icon: 'fa-solid fa-mobile-screen', isTextIcon: true },
      { name: 'SEO', icon: 'fa-solid fa-magnifying-glass', isTextIcon: true },
    ],
  },
];
