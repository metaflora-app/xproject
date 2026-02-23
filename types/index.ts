export type ProjectCategory = "pet project" | "micro saas" | "experiment";

export type ProjectStatus =
  | "prototype"
  | "private beta"
  | "concept prototype"
  | "mvp concept";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string;
  image: string;
  overview: string;
  whyItExists: string;
  howItWorks: string[];
  coreFeatures: string[];
  mvpScope: string;
  nextSteps: string[];
  links: ProjectLink[];
}
