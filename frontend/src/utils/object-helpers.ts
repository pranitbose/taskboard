const filter = <T extends Record<string, unknown>>(
  obj: T,
  predicate: (key: keyof T, value: T[keyof T]) => boolean
): Partial<T> => {
  const result: Partial<T> = {};
  (Object.keys(obj) as Array<keyof T>).forEach(key => {
    if (predicate(key, obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
};

export { filter };
