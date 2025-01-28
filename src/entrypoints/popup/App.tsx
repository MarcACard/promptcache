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
  const [page, setPage] = useState<"home" | "edit">("home");

  // Create a new Prompt
  const createPrompt = (newPrompt: Prompt) => {
    const newPrompts = [...prompts, newPrompt];

    setPrompts(newPrompts);
  };

  return (
    <div className="min-w-[400px] h-[350px]">
      <PopupHeader page={page} setPage={setPage} />
      {page === "home" && (
        <>
          <CategoryFilter />
          {/* Prompt Selection */}
          <div className="flex flex-col items-center px-2 pb-2">
            <PromptItems prompts={prompts} />
          </div>
        </>
      )}

      {/* Add Prompt */}
      {page === "edit" && (
        <PromptForm createPrompt={createPrompt} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
