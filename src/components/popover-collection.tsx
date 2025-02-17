import { Check } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import { type Collections } from "@/types";
import { CollectionDot } from "./ui/collection-dot";

interface PopoverCollectionMenuProps {
  collections: Collections;
  currentCollectionId: string;
  onCollectionSelect: (collectionId: string) => void;
}

export function PopoverCollectionMenu({
  collections,
  currentCollectionId,
  onCollectionSelect,
}: PopoverCollectionMenuProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const modifiedCollections = collections.filter((c) => c.id !== "0");

  return (
    <Command className="w-40">
      <CommandInput
        value={searchQuery}
        onValueChange={setSearchQuery}
        icon={null}
        placeholder="Search Collections..."
        className="h-8"
        ref={inputRef}
      />
      <CommandList>
        {modifiedCollections.length > 0 &&
          modifiedCollections.map((collection) => (
            <CommandItem
              key={collection.id}
              onSelect={() => onCollectionSelect(collection.id)}
            >
              <CollectionDot
                variant="default"
                size="sm"
                bgColor={collection.color}
              />
              <span className="truncate flex-1">{collection.title}</span>
              <Check
                className={cn(
                  "ml-auto",
                  currentCollectionId === collection.id
                    ? "opacity-100"
                    : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
      </CommandList>
    </Command>
  );
}
