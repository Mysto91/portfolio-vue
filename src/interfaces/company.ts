import { Url } from '@/types/request';

export interface Company {
  name: string;
  url: Url;
  logo: Url;
  logoClass: string | null;
}
