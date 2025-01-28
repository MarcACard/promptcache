import { useState, FormEvent } from "react";

import { type Prompt } from "@/types/";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function PromptForm({
  createPrompt,
  setPage,
}: {
  createPrompt: (newPrompt: Prompt) => void;
  setPage: React.Dispatch<React.SetStateAction<"home" | "edit">>;
}) {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !prompt.trim()) return;

    try {
      createPrompt({
        id: crypto.randomUUID(),
        title: title,
        prompt: prompt,
        dateCreated: Date.now(),
        favorite: false,
      });
    } catch (error) {
      console.error("Issue trying to create a prompt", error);
      return;
    }

    setTitle("");
    setPrompt("");
    setPage("home");
  };

  return (
    <div className="p-4">
      <form id="prompt-form" onSubmit={onSubmit}>
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
              className="text-sm"
              placeholder="You are a helpful assistant..."
              required={true}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button className="font-bold">Save</Button>
        </div>
      </form>
    </div>
  );
}
