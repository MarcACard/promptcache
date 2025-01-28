import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Plus, ArrowLeft, Menu, Settings, CircleAlert } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function PopupMenu() {
  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="xs"
              className="size-8 outline-none"
              onClick={() => console.log("Settings Button Clicked")}
            >
              <Menu />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Menu</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} className="w-[150px]">
        <DropdownMenuItem>
          <Settings />
          <span>Options</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CircleAlert />
          <span>Report Issue</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
      <div className="flex gap-2">
        <PopupMenu />
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
