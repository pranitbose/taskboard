import { storageAvailable } from "../utils/storage-helper";
import { WebStorage } from "../web-storage";
import {
  validateSessionStorageItem,
  type SessionStorageData
} from "./validator";

class SessionStorage extends WebStorage<SessionStorageData> {
  private static instance: SessionStorage | undefined;
  public readonly enabled: boolean;

  private constructor() {
    const storage = storageAvailable("sessionStorage")
      ? window.sessionStorage
      : undefined;
    super(storage, validateSessionStorageItem);
    this.enabled = storage !== undefined;
  }

  public static getInstance(): SessionStorage {
    SessionStorage.instance ??= new SessionStorage();
    return SessionStorage.instance;
  }
}

const sessionStorage = SessionStorage.getInstance();

export { sessionStorage };
