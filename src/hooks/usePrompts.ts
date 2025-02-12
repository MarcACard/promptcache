import { useState } from "react";

import { StorageKeys } from "@/utils/storage";
import { useStorageSync } from "@/hooks/useStorageSync";
import { type Prompt } from "@/types/";

export function usePrompts() {
  const [prompts, setPrompts] = useStorageSync<Prompt[]>(
    StorageKeys.PROMPTS,
    []
  );
  const [promptToEdit, setPromptToEdit] = useState<Prompt | null>(null);

  const handleCreatePrompt = (newPrompt: Prompt) => {
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
  };

  const handleUpdatePrompt = (updatedPrompt: Prompt) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) => (p.id === updatedPrompt.id ? updatedPrompt : p))
    );
  };

  const handleDeletePrompt = (promptId: string) => {
    setPrompts((prevPrompts) => prevPrompts.filter((p) => p.id !== promptId));
  };

  const handleFavoriteToggle = (promptId: string) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) =>
        p.id === promptId ? { ...p, favorite: !p.favorite } : p
      )
    );
  };

  const getSortedPrompts = () => {
    return [...prompts].sort((a, b) => Number(b.favorite) - Number(a.favorite));
  };

  return {
    prompts: getSortedPrompts(),
    promptToEdit,
    setPromptToEdit,
    handleCreatePrompt,
    handleUpdatePrompt,
    handleDeletePrompt,
    handleFavoriteToggle,
  };
}
