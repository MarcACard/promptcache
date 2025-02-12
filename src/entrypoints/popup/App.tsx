import { useState } from "react";

import { CollectionsFilter } from "@/components/collections-filter";
import { StorageKeys } from "@/utils/storage";
import { type Prompt } from "@/types/";
import { PromptForm } from "@/components/prompt-form";

import { useStorageSync } from "@/hooks/useStorageSync";
import { PopupHeader } from "@/components/popup-header";
import { PromptItems } from "@/components/prompt-items";

import { usePrompts } from "@/hooks/usePrompts";

function App() {
  const {
    prompts,
    promptToEdit,
    setPromptToEdit,
    handleCreatePrompt,
    handleUpdatePrompt,
    handleDeletePrompt,
    handleFavoriteToggle,
  } = usePrompts();

  const [page, setPage] = useState<"home" | "form">("home");

  const handleEditPrompt = (prompt: Prompt) => {
    setPromptToEdit(prompt);
    setPage("form");
  };

  const handleSubmitPrompt = (prompt: Prompt) => {
    if (promptToEdit) {
      handleUpdatePrompt(prompt);
    } else {
      handleCreatePrompt(prompt);
    }
    setPromptToEdit(null);
    setPage("home");
  };

  return (
    <div className="w-[550px] h-[350px] flex flex-col">
      <PopupHeader
        page={page}
        setPage={setPage}
        setPromptToEdit={setPromptToEdit}
      />
      {page === "home" && (
        <>
          <CollectionsFilter />
          <PromptItems
            prompts={prompts}
            onDeletePrompt={handleDeletePrompt}
            onToggleFavorite={handleFavoriteToggle}
            onEdit={handleEditPrompt}
          />
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
