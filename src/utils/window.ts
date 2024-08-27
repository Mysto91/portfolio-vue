import { Url } from '@/types/request';

export function openInNewTab(url: Url): void {
  window.open(url, '_blank');
}
