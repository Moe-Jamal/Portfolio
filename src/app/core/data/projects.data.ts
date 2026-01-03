import { IProject } from '../../models/project.model';

export const PROJECTS: IProject[] = [
  {
    id: '1',
    title: 'Portfolio',
    slug: 'portfolio',
    subTitle: 'Frontend',
    description:
      "This project is a portfolio website developed using Angular. The website is designed to showcase the user's skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.",
    imageUrl: '/images/project-1.png',
    primaryColor: '#B5FF45',
    technologies: ['React', 'Angular', 'Vue', 'Css'],
    github: 'https://github.com',
    demoLink: 'https://demo.com',
    highlight: true,
    features: [
      {
        title: 'Responsive Design',
        description:
          'The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.',
      },
      {
        title: 'Modern UI/UX',
        description:
          'The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.',
      },
    ],
  },
  {
    id: '2',
    title: 'Project 2',
    slug: 'project-2',
    subTitle: 'Project 2',
    description: 'Project 2',
    imageUrl: '/images/project-2.png',
    primaryColor: '#09c',
    technologies: ['React', 'Angular', 'Vue'],
    github: '/projects/2',
    highlight: true,
    features: [
      {
        title: 'Responsive Design',
        description:
          'The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.',
      },
      {
        title: 'Modern UI/UX',
        description:
          'The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.',
      },
    ],
  },
  {
    id: '3',
    title: 'Project 3',
    slug: 'project-3',
    subTitle: 'Project 3',
    description: 'Project 3',
    imageUrl: '/images/project-3.png',
    primaryColor: '#932C12',
    technologies: ['React', 'Angular', 'Vue'],
    github: '/projects/3',
    highlight: true,
  },
  {
    id: '4',
    title: 'Project 4',
    slug: 'project-4',
    subTitle: 'Project 4',
    description: 'Project 4',
    imageUrl: '/images/project-4.png',
    primaryColor: '#932C12',
    technologies: ['React', 'Angular', 'Vue'],
    github: '/projects/4',
    highlight: false,
  },
  {
    id: '5',
    title: 'Project 5',
    slug: 'project-5',
    subTitle: 'Project 5',
    description: 'Project 5',
    imageUrl: '/images/project-5.png',
    primaryColor: '#932C12',
    technologies: ['React', 'Angular', 'Vue'],
    github: '/projects/5',
    highlight: false,
  },
  {
    id: '6',
    title: 'Project 6',
    slug: 'project-6',
    subTitle: 'Project 6',
    description: 'Project 6',
    imageUrl: '/images/project-6.png',
    primaryColor: '#932C12',
    technologies: ['React', 'Angular', 'Vue'],
    github: '/projects/6',
    highlight: false,
  },
];
