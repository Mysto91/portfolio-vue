import { Url, UUID } from '@/types/request';
import { Technology } from '@/interfaces/technology';

interface Funtionality {
  id: number;
  description: string;
}

export enum ProjectImageType {
  MAIN_IMAGE_URL = 'main_image_url',
  FIRST_IMAGE_URL = 'first_image_url',
  SECOND_IMAGE_URL = 'second_image_url',
}

interface ProjectImages {
  type: ProjectImageType;
  url: Url;
}

export interface ProjectItem {
  uuid: UUID;
  title: string;
  description: string;
  technologies: Technology[];
  appUrl: Url;
  githubUrl?: Url;
  credits: string | null;
  functionalities: Funtionality[];
  overview: string;
  images: ProjectImages[];
}
