import { T } from '@/types/template';
import { DateTime } from 'luxon';

export enum CacheKey {
  ALL_TECHNOLOGIES = 'all-technologies',
  ALL_EXPERIENCES = 'all-experiences',
  ALL_DEGREES = 'all-degrees',
  ALL_SOCIAL_NETWORKS = 'all-social-networks'
}

interface Cache {
  value: string | T[];
  expiryTime: DateTime;
}

export function setCache(cacheKey: CacheKey, value: string | T[], ttl = 30): void {
  const cacheValue = JSON.stringify(
    {
      value,
      expiryTime: DateTime.now().plus({ minutes: ttl }),
    } as Cache,
  );

  localStorage.setItem(cacheKey, cacheValue);
}

export function getCache(cacheKey: CacheKey): Cache | null {
  const cacheValue = localStorage.getItem(cacheKey);

  if (!cacheValue) {
    return null;
  }

  const cacheParsed = JSON.parse(cacheValue);

  return {
    value: cacheParsed.value,
    expiryTime: DateTime.fromISO(cacheParsed.expiryTime),
  };
}

export function clearCache(): void {
  localStorage.clear();
}
