export type Prompt = {
  id: string; // UUID
  title: string;
  icon: string;
  prompt: string;
  dateCreated: number;
  lastUsed?: number;
  folder: string;
  favorite: boolean;
};

export type Prompts = Prompt[];
