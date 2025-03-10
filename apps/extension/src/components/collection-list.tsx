import { useState } from "react";

import { Pencil, Plus, Trash2 } from "lucide-react";
import { cn } from "@/utils";

import { CollectionForm } from "@/components/collection-form";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { Badge } from "@/components/ui/badge";
import { CollectionDot } from "@/components/ui/collection-dot";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";

import { type Collection, type Collections } from "@/types/";

interface CollectionListProps {
  collections: Collections;
  selectedCollectionId: string;
  onCollectionSelect: (collectionId: string) => void;
  onCreateCollection: (collection: Collection) => void;
  onUpdateCollection: (collection: Collection) => void;
  onDeleteCollection: (collectionId: string) => void;
}

export function CollectionList({
  collections,
  selectedCollectionId,
  onCollectionSelect,
  onCreateCollection,
  onUpdateCollection,
  onDeleteCollection,
}: CollectionListProps) {
  return (
    <div
      tabIndex={-1}
      className="flex-shrink-0 px-2 py-1 border-b overflow-x-auto no-scrollbar focus-visible:outline-none"
    >
      <div className="flex gap-2 ">
        <CreateCollection onCreateCollection={onCreateCollection} />

        {collections.map((collection) => (
          <CollectionBadge
            key={collection.id}
            collection={collection}
            isSelected={collection.id === selectedCollectionId}
            onSelected={onCollectionSelect}
            onUpdate={onUpdateCollection}
            onDelete={onDeleteCollection}
          />
        ))}
      </div>
    </div>
  );
}

interface CreateCollectionProps {
  onCreateCollection: (collection: Collection) => void;
}

function CreateCollection({ onCreateCollection }: CreateCollectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="focus:outline-none group">
        <Badge
          variant="outline"
          className="border border-input cursor-pointer bg-background shadow-sm hover:shadow-none hover:bg-accent hover:text-accent-foreground group-focus:ring-1 group-focus:ring-ring"
        >
          <Plus className="size-4" />
        </Badge>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 px-2 py-2"
        onCloseAutoFocus={(e) => e.preventDefault()}
        align="start"
      >
        <CollectionForm
          onSubmit={(e) => {
            onCreateCollection(e);
            setIsOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

interface CollectionBadgeProps {
  collection: Collection;
  isSelected: boolean;
  onSelected: (collectionId: string) => void;
  onUpdate: (collection: Collection) => void;
  onDelete: (collectionId: string) => void;
}

function CollectionBadge({
  collection,
  isSelected,
  onSelected,
  onUpdate,
  onDelete,
}: CollectionBadgeProps) {
  // We must control popover state manually so that we can close the
  // popover if a user edits & saves changes.
  const [isOpen, setIsOpen] = useState(false);

  // Disable Context Menu Items for default collection (ALL)
  const isDefaultCollection = collection.id === "0";

  return (
    <Popover modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <ContextMenu modal={false}>
        <PopoverAnchor asChild>
          <ContextMenuTrigger asChild>
            <div onClick={() => onSelected(collection.id)}>
              <Badge
                variant={isSelected ? "secondary" : "outline"}
                className={cn(
                  "cursor-pointer group",
                  isSelected && "border-base",
                  !isSelected && "text-muted-foreground hover:text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <CollectionDot
                  className={cn("mr-2", !isSelected && "opacity-50 group-hover:opacity-100")}
                  size="xs"
                  bgColor={collection.color}
                />
                <span className="text-nowrap select-none">
                  {collection.title}
                </span>
              </Badge>
            </div>
          </ContextMenuTrigger>
        </PopoverAnchor>

        <ContextMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <PopoverTrigger asChild>
            <ContextMenuItem disabled={isDefaultCollection}>
              <Pencil className="size-4 mr-2" />
              <span>Edit</span>
            </ContextMenuItem>
          </PopoverTrigger>
          <ContextMenuItem
            onSelect={() => onDelete(collection.id)}
            disabled={isDefaultCollection}
          >
            <Trash2 className="size-4 mr-2" />
            <span>Delete</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <PopoverContent className="w-64 px-2 py-2">
        <CollectionForm
          initialCollection={collection}
          onSubmit={(c) => {
            onUpdate(c);
            setIsOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
