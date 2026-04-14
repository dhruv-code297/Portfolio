export interface Project {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
  coverImage: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}