import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft, Menu, SquareTerminal } from "lucide-react";
import { StorageKeys, createStorageHelper } from "@/utils/storage";
import { type Prompt, type Prompts } from "@/types/";
import { PromptForm } from "@/components/prompt-form";

const promptStorage = createStorageHelper<Prompts>(StorageKeys.PROMPTS, []);

function App() {
  const [prompts, setPrompts] = useState<Prompts>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [page, setPage] = useState<"home" | "edit">("home");

  // Initialize prompts from local storage.
  // useEffect over intializer function b/c getPrompts() is async
  useEffect(() => {
    const fetchPrompts = async () => {
      console.log("Fetching prompts from Local Storage");
      try {
        const savedPrompts = await promptStorage.get();
        setPrompts(savedPrompts);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      } finally {
        setIsInitialized(true);
      }
    };

    fetchPrompts();
  }, []);

  // Sync Prompts with Local Storage
  useEffect(() => {
    const savePrompts = async () => {
      if (!isInitialized) return;
      console.log("Saving Prompts to Local Storage");
      try {
        await promptStorage.set(prompts);
      } catch (error) {
        console.error("Error saving prompts:", error);
      }
    };

    savePrompts();
  }, [prompts]);

  const onCopy = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    window.close();
  };

  // Create a new Prompt
  const createPrompt = (newPrompt: Prompt) => {
    const newPrompts = [...prompts, newPrompt];

    setPrompts(newPrompts);
  };

  return (
    <div className="min-w-[400px]">
      {/* Popup Header */}
      <div className="flex items-center justify-between p-2 border-b">
        <div>
          <h1 className="text-lg font-bold">PromptCache</h1>
        </div>
        <div className="flex gap-2 transition-all duration-500 ease-in-out">
          <Button
            variant="outline"
            size="xs"
            className="size-8"
            onClick={() => console.log("Settings Button Clicked")}
          >
            <Menu />
          </Button>
          <Button
            variant={page === "home" ? "default" : "secondary"}
            size="xs"
            onClick={() => setPage(page === "home" ? "edit" : "home")}
            className="flex items-cetner gap-2 transition-colors duration-300 ease-in-out"
          >
            {page === "home" ? <Plus /> : <ArrowLeft />}
            <span className="text-sm">
              {page === "home" ? "New Prompt" : "Back"}
            </span>
          </Button>
        </div>
      </div>

      {/* Prompt Selection */}
      {page === "home" && (
        <div className="flex flex-col items-center mt-2 px-2 pb-2">
          {prompts.length > 0 &&
            prompts.map((prompt, index) => (
              <div
                key={prompt.id}
                tabIndex={index + 1}
                className="w-full py-3 px-2 rounded-md flex gap-2 outline-none transition-colors focus:bg-primary focus:text-primary-foreground hover:bg-primary/10 focus:hover:bg-primary group"
                onClick={() => onCopy(prompt.prompt)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onCopy(prompt.prompt);
                  }
                }}
              >
                <div className="flex items-center justify-center">
                  <SquareTerminal />
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-semibold">{prompt.title}</div>
                  <p className="truncate text-xs transition-colors text-muted-foreground group-focus:text-muted">
                    {prompt.prompt}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Add Prompt */}
      {page === "edit" && (
        <PromptForm createPrompt={createPrompt} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
