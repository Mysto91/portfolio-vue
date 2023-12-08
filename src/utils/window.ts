import { Url } from '@/types/request';

// eslint-disable-next-line import/prefer-default-export
export function openInNewTab(url: Url): void {
  window.open(url, '_blank');
}
