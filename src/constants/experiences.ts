import { Experience } from '@/interfaces/Experience';
import { DateTime } from 'luxon';

const dateFormat = 'dd/MM/yyyy';

// eslint-disable-next-line import/prefer-default-export
export const Experiences: Experience[] = [
  {
    title: 'Bimpli (Swile)',
    startDate: DateTime.fromFormat('22/11/2022', dateFormat),
    endDate: null,
    icon: 'images/bimpli.png',
    // eslint-disable-next-line
    content: 'Développeur full stack Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Orange Business Services',
    startDate: DateTime.fromFormat('21/11/2018', dateFormat),
    endDate: DateTime.fromFormat('21/11/2022', dateFormat),
    icon: 'images/orange.png',
    content: 'Développeur back end ...',
  },
  {
    title: 'Airbus Defense & Space (Stage)',
    startDate: DateTime.fromFormat('01/04/2017', dateFormat),
    endDate: DateTime.fromFormat('01/09/2017', dateFormat),
    icon: 'images/airbus.png',
    // eslint-disable-next-line
    content: 'Développeur de base de données J\'ai travaillé en tant que développeur junior pendant un an chez une entreprise de développement de logiciels. Mon travail consistait à développer des applications web pour les clients de l\'entreprise. J\'ai travaillé sur plusieurs projets différents, en utilisant des langages de programmation tels que JavaScript, HTML, CSS, et des frameworks tels que React et Angular.',
  },
];
