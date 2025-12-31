export interface IProject {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  primaryColor: string;
  technologies: string[];
  link?: string;
  highlight?: boolean;
}
