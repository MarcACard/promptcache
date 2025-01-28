import { type Prompts } from "@/types";
export function PromptItems({ prompts }: { prompts: Prompts }) {
  const onCopy = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    window.close();
  };

  return (
    <>
      {prompts.length > 0 &&
        prompts.map((prompt, index) => (
          <div
            key={prompt.id}
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
              <div className="size-6 border border-muted-foreground bg-background rounded-full mr-1" />
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-semibold">{prompt.title}</div>
              <p className="line-clamp-1 text-xs transition-colors text-muted-foreground">
                {prompt.prompt}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}
