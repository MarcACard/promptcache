import { useState, useMemo } from "react";

import { StorageKeys } from "@/utils/storage";
import { useStorageSync } from "@/hooks/useStorageSync";
import { type Prompt } from "@/types/";

/**
 * Custom hook for managing a collection of prompts persisted within browser storage.
 * Provides methods for creating, updating, deleting, and sorting prompts (collections & favorites)
 *
 * @param selectedCollectionId - The ID of the currently selected collection to filter prompts
 * @returns An object containing prompts and handlers to assist with prompt management.
 */
export function usePrompts(selectedCollectionId: string = "0") {
  const [prompts, setPrompts] = useStorageSync<Prompt[]>(
    StorageKeys.PROMPTS,
    []
  );
  const [promptToEdit, setPromptToEdit] = useState<Prompt | null>(null);

  /**
   * Adds a new prompt to state & storage
   *
   * @param newPrompt - Prompt object to be added.
   */
  const handleCreatePrompt = (newPrompt: Prompt) => {
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
  };

  /**
   * Updates an existing prompt
   *
   * @param updatedPrompt - Prompt object to be updated
   */
  const handleUpdatePrompt = (updatedPrompt: Prompt) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) => (p.id === updatedPrompt.id ? updatedPrompt : p))
    );
  };

  /**
   * Removes a prompt from state & storage
   *
   * @param promptId - The ID of the prompt to delete
   */
  const handleDeletePrompt = (promptId: string) => {
    setPrompts((prevPrompts) => prevPrompts.filter((p) => p.id !== promptId));
  };

  /**
   * Toggles the favorite status of a prompt
   *
   * @param promptId The ID of the prompt to toggle favorite status
   */
  const handleFavoriteToggle = (promptId: string) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) =>
        p.id === promptId ? { ...p, favorite: !p.favorite } : p
      )
    );
  };

  /**
   * Links a prompt with a collection.
   *
   * @param promptId - The ID of the prompt to modify
   * @param collectionId - The ID of the collection to toggle a link.
   */
  const handlePromptToCollection = (promptId: string, collectionId: string) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) => {
        if (p.id !== promptId) return p;

        // Toggle - If user selects the already set collection, deselect the collection
        const newCollectionId =
          p.collectionId === collectionId ? undefined : collectionId;

        return { ...p, collectionId: newCollectionId };
      })
    );
  };

  /**
   * Filters prompts based on the selected collection and sorts them by favorite status.
   * Favorites appear first.
   */
  const filteredAndSortedPrompts = useMemo(() => {
    const filtered =
      selectedCollectionId === "0"
        ? prompts
        : prompts.filter((p) => p.collectionId === selectedCollectionId);

    return [...filtered].sort(
      (a, b) => Number(b.favorite) - Number(a.favorite)
    );
  }, [prompts, selectedCollectionId]);

  /**
   * Determines if there are any prompts created, regardless of filters
   */
  const hasAnyPrompts = prompts.length > 0;

  return {
    prompts: filteredAndSortedPrompts,
    hasAnyPrompts,
    promptToEdit,
    setPromptToEdit,
    handleCreatePrompt,
    handleUpdatePrompt,
    handleDeletePrompt,
    handleFavoriteToggle,
    handlePromptToCollection,
  };
}
