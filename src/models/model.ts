export interface ModelCollection<T> {
  items: T[];
}

export function getModelCollection(overrides = {}): ModelCollection<any> {
  return {
    items: [],
    ...overrides,
  };
}
