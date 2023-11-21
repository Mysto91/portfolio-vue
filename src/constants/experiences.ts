import { Experience } from '@/interfaces/Experience';
import { DateTime } from 'luxon';

const dateFormat = 'dd/MM/yyyy';

// eslint-disable-next-line import/prefer-default-export
export const Experiences: Experience[] = [
  {
    title: 'Swile',
    startDate: DateTime.fromFormat('22/11/2022', dateFormat),
    endDate: null,
    icon: 'images/swile.png',
    // eslint-disable-next-line
    content: 'Développeur Full-Stack',
    companyUrl: 'https://www.swile.co/',
  },
  {
    title: 'Orange Business Services',
    startDate: DateTime.fromFormat('21/11/2018', dateFormat),
    endDate: DateTime.fromFormat('21/11/2022', dateFormat),
    icon: 'images/orange.png',
    content: 'Développeur Back-End',
    companyUrl: 'https://www.orange-business.com/',
  },
  {
    title: 'University of Dundee (Stage)',
    startDate: DateTime.fromFormat('01/03/2018', dateFormat),
    endDate: DateTime.fromFormat('31/08/2018', dateFormat),
    icon: 'images/university-of-dundee.png',
    content: 'Développeur Back-End',
    companyUrl: 'https://www.dundee.ac.uk/',
  },
  {
    title: 'Airbus Defense & Space (Stage)',
    startDate: DateTime.fromFormat('01/04/2017', dateFormat),
    endDate: DateTime.fromFormat('01/09/2017', dateFormat),
    icon: 'images/airbus.png',
    class: 'w-20 h-20',
    // eslint-disable-next-line
    content: 'Développeur de base de données',
    companyUrl: 'https://www.airbus.com/',
  },
];
