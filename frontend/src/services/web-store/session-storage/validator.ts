import { z } from "zod/v4";
import { SessionStorageKeys } from "../utils/storage-keys";

const sessionStorageItemSchemas = {
  [SessionStorageKeys.REFRESH_TOKEN]: z.string()
} as const;

type SessionStorageData = {
  [SessionStorageKeys.REFRESH_TOKEN]: string;
};

const validateSessionStorageItem = <K extends keyof SessionStorageData>(
  key: K,
  value: unknown
): SessionStorageData[K] => {
  const itemSchema = sessionStorageItemSchemas[key];
  const parsedValue = itemSchema.parse(value);
  return parsedValue as SessionStorageData[K];
};

export { validateSessionStorageItem, type SessionStorageData };
