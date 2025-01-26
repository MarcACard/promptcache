import { useEffect, useState } from "react";
import { createStorageHelper } from "@/utils/storage";
import { StorageItemKey } from "wxt/storage";

export function useStorageSync<T>(storageKey: StorageItemKey, defaultValue: T) {
  const storage = createStorageHelper<T>(storageKey, defaultValue);
  const [state, setState] = useState<T>(defaultValue);
  const [isInitialized, setIsInitialized] = useState(false);

  // Fetch Initial Value from Storage
  useEffect(() => {
    const saveData = async () => {
      try {
        const data = await storage.get();
        setState(data);
      } catch (error) {
        console.error(`Failed to fetch data for ${storageKey}:`, error);
      } finally {
        setIsInitialized(true);
      }
    };

    saveData();
  });

  // Sync State to Storage on Changes
  useEffect(() => {
    const saveData = async () => {
      if (!isInitialized) return;
      try {
        await storage.set(state);
      } catch (error) {
        console.error(`Failed to save data for key ${storageKey}:`, error);
      }
    };

    saveData();
  }, [state, isInitialized]);

  return [state, setState] as const;
}
