const makeEntity = <T>(entity: T, error?: Error): MappedEntity<T> => {
  if (error) {
    return {
      value: null,
      error,
    };
  }
  return {
    value: entity,
    error: null,
  };
};

export interface MappedEntity<T> {
  value: T | null;
  error: Error | null;
}

export { makeEntity };
