import { useState } from "react";

import { StorageKeys } from "@/utils/storage";
import { useStorageSync } from "@/hooks/useStorageSync";
import { type Collection, type Collections } from "@/types/";

/**
 * Default collection that always exists.
 * Show all prompts, cannot be edited or deleted.
 * Not actually stored in browser storage.
 */
const defaultCollection: Collection = {
  id: "0",
  title: "All",
  color: "grey",
};

/**
 * Custom hook for managing collections state with persistence to browser storage.
 * Provides methods for creating, updating, and deleting collections. The default collection
 * will always be included.
 *
 * @returns - an object containing the collections array (including the default collection)
 */
export function useCollections() {
  const [collections, setCollections] = useStorageSync<Collections>(
    StorageKeys.COLLECTIONS,
    []
  );
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>("0");

  /**
   * Adds a new collection to the list.
   *
   * @param newCollection - THe collection object to be added
   */
  const handleCreateCollection = (newCollection: Collection) => {
    setCollections((prevCollections) => [...prevCollections, newCollection]);
  };

  /**
   * Updates an existing collection
   *
   * @param updatedCollection - The collection object to update
   */
  const handleUpdateCollection = (updatedCollection: Collection) => {
    setCollections((prevCollections) =>
      prevCollections.map((c) =>
        c.id === updatedCollection.id ? updatedCollection : c
      )
    );
  };

  /**
   * Removes a collection from state and browser storage.
   * The default "All" collection (id: "0") cannot be deleted.
   *
   * @param collectionId - The ID of the collection to delete
   */
  const handleDeleteCollection = (collectionId: string) => {
    setCollections((prevCollections) => {
      return prevCollections.filter((c) => c.id !== collectionId);
    });
  };

  /**
   * Retreives a collection by its ID.
   * 
   * @param collectionId - The ID of the collection to find
   * @returns The found collectino or undefined if not found
   */
  const getCollectionById = (collectionId: string) => {
    return collections.find((c) => c.id === collectionId);
  };

  /**
   * Sets the selected collection ID with special handling for the default "All" collection
   * If the default collection is selected or the same collection is seleced again (toggle), 
   * it reverts to the "All" collecion view
   * 
   * @param collectionId - The ID of the collection to select
   */
  const selectCollection = (collectionId: string): void => {
    setSelectedCollectionId((prevSelection) => {
      if (collectionId === "0" || prevSelection === collectionId) {
        return "0";
      } else {
        return collectionId;
      }
    });
  };

  // Combine the default "All" collection with user created collections
  const collectionsFull = [defaultCollection, ...collections];

  return {
    collections: collectionsFull,
    selectedCollectionId,
    handleCreateCollection,
    handleUpdateCollection,
    handleDeleteCollection,
    getCollectionById,
    selectCollection,
  };
}
