export interface ModelCollection<T> {
  items: T[];
}

export function getModelCollection(overrides = {}): ModelCollection<never> {
  return {
    items: [],
    ...overrides,
  };
}
