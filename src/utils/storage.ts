import { storage, StorageItemKey } from "wxt/storage";

export const StorageKeys: Record<string, StorageItemKey> = {
  PROMPTS: "local:promptcache_prompts",
  COLLECTIONS: "local:promptcache_collections",
  THEME: "local:promptcache_theme",
  USER_SETTINGS: "local:promptcache_user_settings",
};

export const createStorageHelper = <T>(key: StorageItemKey, fallback: T) => {
  return {
    get: async (): Promise<T> => {
      try {
        return await storage.getItem<T>(key, { fallback });
      } catch (error) {
        console.error(`Failed to get item: ${key}`, error);
        return fallback;
      }
    },
    set: async (value: T): Promise<void> => {
      try {
        await storage.setItem(key, value);
      } catch (error) {
        console.error(`Failed to set item: ${key}`, error);
      }
    },
    remove: async (): Promise<void> => {
      try {
        await storage.removeItem(key);
      } catch (error) {
        console.error(`Failed to remove item: ${key}`, error);
      }
    },
  };
};
