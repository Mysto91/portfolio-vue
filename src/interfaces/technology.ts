import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { TechnologyType } from '@/enums/technologyType';
import { Url } from '@/types/request';

export interface Technology {
  id: number;
  name: Framework | Language;
  type: TechnologyType;
  url: Url;
}
