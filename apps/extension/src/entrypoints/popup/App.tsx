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
  const [searchValue, setSearchValue] = useState("");
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
    hasAnyPrompts,
    promptToEdit,
    setPromptToEdit,
    handleCreatePrompt,
    handleUpdatePrompt,
    handleDeletePrompt,
    handleFavoriteToggle,
    handlePromptToCollection,
  } = usePrompts(selectedCollectionId, searchValue);

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
        searchValue={searchValue}
        handleSearchChange={(event) => {
          setSearchValue(event.target.value);
        }}
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

          {!hasAnyPrompts && <PopupWelcome />}

          {hasAnyPrompts && prompts.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-2  mb-6">
              <h2 className="text-lg font-semibold ">No prompts found</h2>
              <span className="text-muted-foreground">
                Try adjusting your search or select another collection.
              </span>
            </div>
          )}

          {prompts.length > 0 && (
            <PromptItems
              prompts={prompts}
              onDeletePrompt={handleDeletePrompt}
              onToggleFavorite={handleFavoriteToggle}
              onPromptToCollection={handlePromptToCollection}
              onEdit={handleEditPrompt}
              collections={collections}
              getCollectionById={getCollectionById}
            />
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
