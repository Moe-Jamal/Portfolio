export interface IProject {
  id: string;
  title: string;
  slug: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  scrollImage?: string;
  videoUrl?: string;
  primaryColor: string;
  techStack: string[];
  technologies: string[];
  github?: string;
  liveLink?: string;
  demoLink?: string;
  highlight?: boolean;
  features?: { title: string; description: string }[];
}
