import React, { useEffect, useRef, useState } from "react";

import { Save } from "lucide-react";

import { CollectionColorCombobox } from "@/components/collection-color-combobox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Collection, ColorSetType } from "@/types";

interface CollectionFormProps {
  initialCollection?: Collection;
  onSubmit: (collection: Collection) => void;
}

export function CollectionForm({
  initialCollection,
  onSubmit,
}: CollectionFormProps) {
  const [nameValue, setNameValue] = useState(initialCollection?.title ?? "");
  const [colorValue, setColorValue] = useState<ColorSetType>(
    initialCollection?.color ?? "grey"
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameValue.trim()) return;

    onSubmit({
      id: initialCollection?.id ?? crypto.randomUUID(),
      title: nameValue,
      color: colorValue,
    });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flex items-center">
      <div className="mr-2">
        <Label className="sr-only" htmlFor="collection-color">
          Color
        </Label>
        <CollectionColorCombobox
          collectionColor={colorValue}
          setCollectionColor={setColorValue}
        />
      </div>
      <div className="mr-1">
        <Label htmlFor="collection-name" className="sr-only">
          Name
        </Label>
        <Input
          id="collection-name"
          ref={inputRef}
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          className="col-span-3 h-8 text-sm"
          placeholder="Collection Name"
          required
        />
      </div>
      <Button
        size="icon"
        variant="outline"
        type="submit"
        className="size-8 rounded-md"
      >
        <Save className="size-3" />
      </Button>
    </form>
  );
}
