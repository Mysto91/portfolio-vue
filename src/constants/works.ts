import { Technology } from '@/enums/technology';
import { Workitem } from '@/interfaces/workitem';

// eslint-disable-next-line import/prefer-default-export
export const Works: Workitem[] = [
  {
    id: 1,
    title: 'Calcul cote',
    url: '/works/1',
    description: 'un projet de paris sportifs',
    technologies: [Technology.REACT, Technology.JAVASCRIPT],
    appUrl: 'https://calcul-cote.web.app/',
    githubUrl: 'https://github.com/Mysto91/calcul-cote',
  },
  {
    id: 2,
    title: 'Calcul cote v2',
    url: '/works/2',
    description: 'la refonte du projet de paris sportifs',
    technologies: [Technology.REACT, Technology.TYPESCRIPT, Technology.TAILWINDCSS],
    appUrl: 'https://calcul-cote-v2.web.app/',
    githubUrl: 'https://github.com/Mysto91/calcul-cote-v2',
  },
  {
    id: 3,
    title: 'Portfolio',
    url: '/works/3',
    description: 'Un premier portfolio en react',
    technologies: [Technology.REACT, Technology.JAVASCRIPT],
    appUrl: 'https://portfolio-55b74.web.app/',
    githubUrl: 'https://github.com/Mysto91/portfolio',
  },
  {
    id: 4,
    title: 'Ce portolio',
    url: '/works/4',
    description: 'La dernière version de mon portfolio développé en vue',
    technologies: [Technology.REACT, Technology.JAVASCRIPT],
    appUrl: '/',
    githubUrl: 'https://github.com/Mysto91/portfolio-vue',
  },
];
