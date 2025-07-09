type StorageType = "sessionStorage" | "localStorage";

const storageAvailable = (type: StorageType): boolean => {
  try {
    const storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch {
    return false;
  }
};

export { storageAvailable };
