export type Prompt = {
  id: number;
  title: string;
  icon: string;
  prompt: string;
  dateCreated: number;
  lastUsed?: number;
  folder: string;
  favorite: boolean;
};

export type Prompts = Prompt[];
