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
