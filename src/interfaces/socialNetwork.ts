import { Url, UUID } from '@/types/request';
import { SocialNetwork as SocialNetworkEnum } from '@/enums/socialNetwork';

export interface SocialNetwork {
  uuid: UUID;
  name: SocialNetworkEnum;
  url: Url;
}
