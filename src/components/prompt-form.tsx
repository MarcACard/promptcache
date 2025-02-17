import { useState, FormEvent } from "react";

import { type Prompt } from "@/types/";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PromptFormProps {
  initialPrompt: Prompt | null;
  onSubmitPrompt: (prompt: Prompt) => void;
}

export function PromptForm({ initialPrompt, onSubmitPrompt }: PromptFormProps) {
  const [title, setTitle] = useState(initialPrompt?.title || "");
  const [prompt, setPrompt] = useState(initialPrompt?.prompt || "");

  const isEditing = !!initialPrompt;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !prompt.trim()) return;

    try {
      onSubmitPrompt({
        id: initialPrompt?.id ?? crypto.randomUUID(),
        title: title,
        prompt: prompt,
        dateCreated: initialPrompt?.dateCreated ?? Date.now(),
        favorite: initialPrompt?.favorite ?? false,
        collectionId: initialPrompt?.collectionId ?? undefined
      });
    } catch (error) {
      console.error("Issue trying to create a prompt", error);
      return;
    }
  };

  return (
    <div className="p-4">
      <form id="prompt-form" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="prompt-title" className="text-xs">
              Prompt Title
            </Label>
            <Input
              id="prompt-title"
              className="text-sm"
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="full-prompt" className="text-xs">
              Prompt
            </Label>
            <Textarea
              id="full-prompt"
              className="text-sm  max-h-[310px]"
              placeholder="You are a helpful assistant..."
              required={true}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button className="font-bold">{isEditing ? "Update" : "Save"}</Button>
        </div>
      </form>
    </div>
  );
}
