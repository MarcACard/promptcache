import { ContextMenuItem } from "@/components/ui/context-menu";
import { Plus } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export function PopoverCollectionMenu() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputValue = (e: string) => {
    console.log(e);
    setSearchInput(e);
  };
  return (
    <>
      <Command>
        <CommandInput
          value={searchInput}
          onValueChange={handleInputValue}
          placeholder="Search Collections..."
          className="h-9"
        />
        <CommandList>
          <CommandGroup>
            <CommandItem>
              <div className="size-3 bg-destructive rounded-full" />
              Writing
            </CommandItem>
            <CommandItem>
              <div className="size-3 bg-orange-300 rounded-full" />
              Codegen
            </CommandItem>
            <CommandItem>
              <div className="size-3 bg-teal-300 rounded-full" />
              Debugging
            </CommandItem>
            <CommandItem>
              <div className="size-3 bg-lime-300 rounded-full" />
              GenArt
            </CommandItem>
            <CommandItem value={searchInput}>
              <Plus className="size-3  mr-1.5" />
              <span className="font-medium">Create New:</span>"{searchInput}"
            </CommandItem>
            {/* <CommandEmpty>Create new</CommandEmpty> */}
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
