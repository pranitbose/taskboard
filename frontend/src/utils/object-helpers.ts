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

const isObject = (val: unknown): val is Record<string, unknown> =>
  typeof val === "object" && val !== null && !Array.isArray(val);

export { filter, isObject };
