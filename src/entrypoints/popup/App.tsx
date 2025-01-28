import { useState } from "react";

import { CategoryFilter } from "@/components/category-filter";
import { StorageKeys } from "@/utils/storage";
import { type Prompt } from "@/types/";
import { PromptForm } from "@/components/prompt-form";

import { useStorageSync } from "@/hooks/useStorageSync";
import { PopupHeader } from "@/components/popup-header";
import { PromptItems } from "@/components/prompt-items";

function App() {
  const [prompts, setPrompts] = useStorageSync<Prompt[]>(
    StorageKeys.PROMPTS,
    []
  );
  const [promptToEdit, setPromptToEdit] = useState<Prompt | null>(null);
  const [page, setPage] = useState<"home" | "form">("home");

  // Create a new Prompt
  const createPrompt = (newPrompt: Prompt) => {
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
  };

  const updatePrompt = (updatedPrompt: Prompt) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) => (p.id === updatedPrompt.id ? updatedPrompt : p))
    );
  };

  const handleEditPrompt = (prompt: Prompt) => {
    setPromptToEdit(prompt);
    setPage("form");
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

  const handleSubmitPrompt = (prompt: Prompt) => {
    if (promptToEdit) {
      updatePrompt(prompt);
    } else {
      createPrompt(prompt);
    }
    setPromptToEdit(null);
    setPage("home");
  };

  // Prioritize Favorited Prompts
  const sortedPrompts = [...prompts].sort(
    (a, b) => Number(b.favorite) - Number(a.favorite)
  );

  return (
    <div className="min-w-[400px] h-[350px]">
      <PopupHeader
        page={page}
        setPage={setPage}
        setPromptToEdit={setPromptToEdit}
      />
      {page === "home" && (
        <>
          <CategoryFilter />
          {/* Prompt Selection */}
          <div className="flex flex-col items-center px-2 pb-2">
            <PromptItems
              prompts={sortedPrompts}
              onDeletePrompt={handleDeletePrompt}
              onToggleFavorite={handleFavoriteToggle}
              onEdit={handleEditPrompt}
            />
          </div>
        </>
      )}
      {page === "form" && (
        <PromptForm
          initialPrompt={promptToEdit}
          onSubmitPrompt={handleSubmitPrompt}
        />
      )}
    </div>
  );
}

export default App;
