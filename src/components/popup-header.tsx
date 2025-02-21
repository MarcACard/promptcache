import { Plus, ArrowLeft } from "lucide-react";

import { PopupMenu } from "@/components/popup-menu";
import { Button } from "@/components/ui/button";

import { Prompt } from "@/types";

interface PopupHeaderProps {
  page: "home" | "form";
  setPage: React.Dispatch<React.SetStateAction<"home" | "form">>;
  setPromptToEdit: React.Dispatch<React.SetStateAction<Prompt | null>>;
}

export function PopupHeader({
  page,
  setPage,
  setPromptToEdit,
}: PopupHeaderProps) {
  const handlePageToggle = () => {
    if (page === "home") {
      setPromptToEdit(null);
      setPage("form");
    } else {
      setPromptToEdit(null);
      setPage("home");
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <h1 className="text-lg font-bold">PromptCache</h1>
      </div>
      <div className="flex gap-2">
        <PopupMenu />
        <Button
          variant={page === "home" ? "outline" : "secondary"}
          size="xs"
          onClick={handlePageToggle}
          className="flex items-center gap-2  shadow-sm hover:shadow-none"
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
