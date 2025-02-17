import React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandList,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CollectionDot } from "@/components/ui/collection-dot";
import { ColorSet, ColorSetType } from "@/types";
import { Check } from "lucide-react";

interface CollectionColorComboboxProps {
  collectionColor: ColorSetType;
  setCollectionColor: React.Dispatch<React.SetStateAction<ColorSetType>>;
}

export function CollectionColorCombobox({
  collectionColor,
  setCollectionColor,
}: CollectionColorComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          role="combobox"
          aria-expanded={open}
          className="rounded-full h-5 w-5"
        >
          <CollectionDot size="sm" bgColor={collectionColor} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-40" align="start">
        <Command className="max-h-52">
          <CommandInput
            className="h-8"
            icon={null}
            placeholder="Pick a Color"
            ref={inputRef}
          />
          <CommandList>
            {ColorSet.map((color, index) => (
              <CommandItem
                value={color}
                key={index}
                onSelect={() => {
                  setCollectionColor(
                    color === collectionColor ? collectionColor : color
                  );
                  setOpen(false);
                }}
              >
                <CollectionDot size="sm" bgColor={color} className="mr-1" />
                <span className="capitalize">{color}</span>
                <Check
                  className={cn(
                    "ml-auto",
                    collectionColor === color ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
