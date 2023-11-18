import { ProjectItem } from '@/interfaces/projectItem';
import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';

// eslint-disable-next-line import/prefer-default-export
export const Works: ProjectItem[] = [
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
    content: {
      overview: 'Pourquoi ce projet ?',
    },
    functionalities: [
      'Fournit les cotes sécurisée avec les meilleurs gains possibles',
      'Donne les différentes combinaisons de pari possibles sans avoir à changer les valeurs',
      'Pas besoin de submit, le calcul se fait en temps réel',
      'Les cotes boostées étant limitées, prend en considération cette limite pour calculer chacun des paris',
    ],
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
    content: {
      overview: 'fake overview',
    },
    functionalities: [
      'Fournit les fonctionalités de Calcul Cote',
      "Donner la possibilité de partager une capture d'écran",
      "Une meilleure gestion d'erreur",
      'Déploiement automatique (CI) vers firebase',
    ],
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
    content: {
      overview: 'fake overview',
    },
    functionalities: [],
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
    content: {
      overview: 'fake overview',
      credits: 'Thanks to Sebastian Petravic for giving me the inspiration, visit his website : https://www.sebastianpetravic.com/',
    },
    functionalities: [],
  },
];
