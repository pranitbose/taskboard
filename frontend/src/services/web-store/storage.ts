/**
 * ESLint rule is intentionally disabled as using `interface` makes more sense
 * than using `type` definition here for implementation
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IStorage<T> {
  get: <K extends keyof T>(key: K) => T[K] | null;
  set: <K extends keyof T>(key: K, value: T[K]) => void;
  remove: (key: keyof T) => void;
  clear: () => void;
}

class StorageShim implements Storage {
  private readonly store: Map<string, string>;
  readonly length: number = 0;

  constructor(store = new Map<string, string>()) {
    this.store = store;
    this.length = this.store.size;
  }

  getItem = (key: string): string | null => {
    if (!this.store.has(key)) {
      return null;
    }
    return this.store.get(key) ?? null;
  };
  setItem = (key: string, value: string): void => {
    this.store.set(key, value);
  };
  removeItem = (key: string): void => {
    this.store.delete(key);
  };
  clear = (): void => {
    this.store.clear();
  };
  key = (index: number): string | null => {
    if (index < 0 || index >= this.length) {
      return null;
    }
    const keys = this.store.keys();
    let i = 0;
    for (const key of keys) {
      if (i === index) {
        return key;
      }
      i++;
    }
    return null;
  };
}

export { StorageShim, type IStorage };
