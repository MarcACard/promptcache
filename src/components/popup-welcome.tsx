import { MessageCircle } from "lucide-react";

export function PopupWelcome() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="mb-10">
          <div className="flex justify-center items-center mb-2">
            <MessageCircle className="mr-1 size-7" />
            <span className="text-2xl font-bold font-brand tracking-tight">PromptCache</span>
          </div>
          <p className="text-base font-semibold text-muted-foreground italic text-center">
            Craft once. Prompt everywhere.
          </p>
        </div>
      </div>
      {/* TODO: Helper Tips on Welcome */}
      {/* <div className="absolute right-16 top-24">
        <span className="text-sm font-medium text-muted-foreground">
          Create your first prompt
        </span>
      </div>
      <div className="absolute left-12 top-28">
        <span className="text-sm font-medium text-muted-foreground">
          Organize with collections
        </span>
      </div> */}
    </>
  );
}
