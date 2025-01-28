import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft, Menu } from "lucide-react";

export function PopupHeader({
  page,
  setPage,
}: {
  page: "home" | "edit";
  setPage: React.Dispatch<React.SetStateAction<"home" | "edit">>;
}) {
  return (
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
  );
}
