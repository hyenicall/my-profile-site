export interface TechStackEntry {
  category: string;
  items: { name: string; detail?: string }[];
}

export interface Challenge {
  problem: string;
  approach: string;
  outcome: string;
}

export interface ArchitectureNote {
  title: string;
  content: string;
  type?: 'text' | 'diagram';
}

export interface Contribution {
  area: string;
  description: string;
  impact?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  role: string;
  image: string;
  github?: string;
  live?: string;
  background?: string;
  decisions?: { title: string; content: string }[];
  results?: string[];
  period?: string;
  teamSize?: string;
  highlights?: string[];
  techStack?: TechStackEntry[];
  challenges?: Challenge[];
  architecture?: ArchitectureNote[];
  contributions?: Contribution[];
  lessonsLearned?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  isTextIcon?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
}
