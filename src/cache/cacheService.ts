import { T } from '@/types/template';

export enum CacheKey {
  ALL_TECHNOLOGIES = 'all-technologies',
  ALL_EXPERIENCES = 'all-experiences',
  ALL_DEGREES = 'all-degrees',
}

export function setCache(cacheKey: CacheKey, value: string | T[]): void {
  let cacheValue: string;

  if (Array.isArray(value)) {
    cacheValue = JSON.stringify(value);
  } else {
    cacheValue = value;
  }

  localStorage.setItem(cacheKey, cacheValue);
}

export function getCache(cacheKey: CacheKey): string | T[] | null {
  const cacheValue = localStorage.getItem(cacheKey);

  if (!cacheValue) {
    return null;
  }

  return JSON.parse(cacheValue);
}

export function clearCache(): void {
  localStorage.clear();
}
