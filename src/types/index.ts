export type Prompt = {
  id: string; // UUID
  title: string;
  prompt: string;
  dateCreated: number;
  favorite: boolean;
  category_id?: string;
};

export type Prompts = Prompt[];

export type Category = {
  id: string;
  title: string;
  color: string;
};

export type Categoires = Category[];
