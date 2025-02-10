import {
  Menu,
  Settings,
  CircleAlert,
  LifeBuoy,
  Monitor,
  Moon,
  Sun,
} from "lucide-react";

import { type Theme, useTheme } from "@/components/theme-provider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="px-1 py-1.5">
      <div className="flex justify-between items-center w-full">
        <span className="text-sm select-none">Theme</span>
        <Tabs value={theme} onValueChange={(value) => setTheme(value as Theme)}>
          <TabsList className="h-9">
            <Tooltip>
              <TooltipTrigger>
                <TabsTrigger value="light">
                  <Sun className="size-4" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">Light mode</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <TabsTrigger value="dark">
                  <Moon className="size-4" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">Dark mode</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <TabsTrigger value="system">
                  <Monitor className="size-4" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">System mode</TooltipContent>
            </Tooltip>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

export function PopupMenu() {
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
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-52"
      >
        <DropdownMenuItem>
          <Settings />
          <span>Options</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CircleAlert />
          <span>Report Issue</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy />
          <span>Help</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <ThemeSelector />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
