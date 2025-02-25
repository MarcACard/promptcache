import { MessageCircle } from "lucide-react";

import { Arrow, ArrowTwist } from "@/components/ui/arrow";

export function PopupWelcome() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="mb-8">
          <div className="flex justify-center items-center mb-4">
            {/* <MessageCircle className="mr-1 size-7" /> */}
            <span className="text-2xl font-bold font-brand tracking-tight">
              [Logo] PromptCache
            </span>
          </div>
          <p className="text-base font-semibold text-muted-foreground italic text-center">
            Your prompt library, stored in browser, always available.
          </p>
        </div>
      </div>
      {/* TODO: Helper Tips on Welcome */}
      <Arrow
        size="lg"
        className="text-muted-foreground absolute right-14 top-[55px] -rotate- scale-x-[-1]"
      />
      <div className="absolute right-[100px] top-[90px]">
        <span className="text-sm font-medium text-muted-foreground">
          Create your first prompt
        </span>
      </div>

      <ArrowTwist className="text-muted-foreground absolute rotate-12 left-3 top-24" />
      <div className="absolute left-7 top-[115px] -rotate-12">
        <span className="text-xs font-medium text-muted-foreground">
          Organize with collections
        </span>
      </div>
    </>
  );
}
