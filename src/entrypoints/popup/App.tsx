import { useState } from "react";

import { CollectionList } from "@/components/collection-list";
import { type Prompt } from "@/types/";
import { PromptForm } from "@/components/prompt-form";
import { PopupWelcome } from "@/components/popup-welcome";
import { PopupHeader } from "@/components/popup-header";
import { PromptItems } from "@/components/prompt-items";

import { usePrompts } from "@/hooks/usePrompts";
import { useCollections } from "@/hooks/useCollections";

function App() {
  const {
    collections,
    selectedCollectionId,
    handleCreateCollection,
    handleUpdateCollection,
    handleDeleteCollection,
    getCollectionById,
    selectCollection,
  } = useCollections();
  const {
    prompts,
    promptToEdit,
    setPromptToEdit,
    handleCreatePrompt,
    handleUpdatePrompt,
    handleDeletePrompt,
    handleFavoriteToggle,
    handlePromptToCollection,
  } = usePrompts(selectedCollectionId);

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
          <CollectionList
            collections={collections}
            onCollectionSelect={selectCollection}
            onCreateCollection={handleCreateCollection}
            onUpdateCollection={handleUpdateCollection}
            onDeleteCollection={handleDeleteCollection}
            selectedCollectionId={selectedCollectionId}
          />
          {prompts.length > 0 ? (
            <PromptItems
              prompts={prompts}
              onDeletePrompt={handleDeletePrompt}
              onToggleFavorite={handleFavoriteToggle}
              onPromptToCollection={handlePromptToCollection}
              onEdit={handleEditPrompt}
              collections={collections}
              getCollectionById={getCollectionById}
            />
          ) : (
            <PopupWelcome />
          )}
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
