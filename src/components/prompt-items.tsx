import { Pencil, Trash2, Star } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { type Prompt, type Prompts } from "@/types";

export function PromptItems({
  prompts,
  onToggleFavorite,
  onDeletePrompt,
  onEdit,
}: {
  prompts: Prompts;
  onToggleFavorite: (promptId: string) => void;
  onDeletePrompt: (promptId: string) => void;
  onEdit: (prompt: Prompt) => void;
}) {
  const onCopy = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      // Add extra buffer to ensure the prompt is _acutally_ copied.
      // Remove timeout and it only works _sometimes_.
      setTimeout(() => window.close(), 50);
    } catch (error) {
      console.log("Failed to Copy", error);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-2 pb-2">
      {prompts.length > 0 &&
        prompts.map((prompt, index) => (
          <ContextMenu key={prompt.id}>
            <ContextMenuTrigger asChild>
              <div
                tabIndex={index + 1}
                className="w-full cursor-pointer py-3 px-2 mt-1 rounded-md flex gap-2 transition-colors hover:bg-muted/80 focus-visible:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted-foreground"
                onClick={() => onCopy(prompt.prompt)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onCopy(prompt.prompt);
                  }
                }}
              >
                <div className="flex items-center justify-center">
                  {/* TODO: Dynamically set color based on category  */}
                  <div className="relative">
                    <div className="size-6 border border-muted-foreground bg-background rounded-full mr-1" />
                    {prompt.favorite && (
                      <Star className="size-6 absolute top-2 left-2 text-background fill-[#F1BF00]" />
                    )}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-semibold flex gap-1">
                    {prompt.title}
                  </div>
                  <p className="line-clamp-1 text-xs transition-colors text-muted-foreground">
                    {prompt.prompt}
                  </p>
                </div>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-36">
              <ContextMenuItem onClick={() => onToggleFavorite(prompt.id)}>
                {prompt.favorite ? (
                  <>
                    <Star className="size-4 mr-2 fill-current" />
                    <span>Unfavorite</span>
                  </>
                ) : (
                  <>
                    <Star className="size-4 mr-2" />
                    <span>Favorite</span>
                  </>
                )}
              </ContextMenuItem>
              <ContextMenuItem onClick={() => onEdit(prompt)}>
                <Pencil className="size-4 mr-2" />
                <span>Edit</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => onDeletePrompt(prompt.id)}>
                <Trash2 className="size-4 mr-2" />
                <span>Delete</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
    </div>
  );
}
