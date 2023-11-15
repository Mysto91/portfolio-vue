import { Workitem } from '@/interfaces/workitem';
import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';

// eslint-disable-next-line import/prefer-default-export
export const Works: Workitem[] = [
  {
    id: 1,
    title: 'Calcul cote',
    description: 'un projet de paris sportifs',
    technologies: {
      frameworks: [Framework.REACT],
      languages: [Language.JAVASCRIPT],
    },
    appUrl: 'https://calcul-cote.web.app/',
    githubUrl: 'https://github.com/Mysto91/calcul-cote',
  },
  {
    id: 2,
    title: 'Calcul cote v2',
    description: 'la refonte du projet de paris sportifs',
    technologies: {
      frameworks: [Framework.REACT, Framework.TAILWINDCSS],
      languages: [Language.TYPESCRIPT],
    },
    appUrl: 'https://calcul-cote-v2.web.app/',
    githubUrl: 'https://github.com/Mysto91/calcul-cote-v2',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Un premier portfolio en react',
    technologies: {
      frameworks: [Framework.REACT],
      languages: [Language.JAVASCRIPT],
    },
    appUrl: 'https://portfolio-55b74.web.app/',
    githubUrl: 'https://github.com/Mysto91/portfolio',
  },
  {
    id: 4,
    title: 'Ce portolio',
    description: 'La dernière version de mon portfolio développé en vue',
    technologies: {
      frameworks: [Framework.VUE, Framework.TAILWINDCSS],
      languages: [Language.TYPESCRIPT],
    },
    appUrl: '/',
    githubUrl: 'https://github.com/Mysto91/portfolio-vue',
  },
];
