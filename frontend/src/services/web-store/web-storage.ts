import { ZodError } from "zod/v4";
import { StorageShim, type IStorage } from "./storage";

type ValidateStorageItem<T> =
  | (<K extends keyof T>(key: K, value: unknown) => T[K])
  | undefined;

class WebStorage<T> implements IStorage<T> {
  private readonly storage: Storage;
  private readonly validateStorageItem?: ValidateStorageItem<T>;

  constructor(
    storage: Storage = new StorageShim(),
    validateStorageItem: ValidateStorageItem<T> = undefined
  ) {
    this.storage = storage;
    this.validateStorageItem = validateStorageItem;
  }

  get<K extends keyof T>(key: K): T[K] | null {
    try {
      const value: unknown = JSON.parse(
        this.storage.getItem(key.toString()) ?? "null"
      );
      if (this.validateStorageItem == null) {
        return value as T[K] | null;
      }
      return this.validateStorageItem(key, value);
    } catch (error) {
      if (error instanceof SyntaxError || error instanceof ZodError) {
        this.remove(key);
      }
      return null;
    }
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    try {
      this.storage.setItem(key.toString(), JSON.stringify(value));
    } catch {
      // intentionally left empty
    }
  }

  remove(key: keyof T): void {
    this.storage.removeItem(key.toString());
  }

  clear(): void {
    this.storage.clear();
  }
}

export { WebStorage };
