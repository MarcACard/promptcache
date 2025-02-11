export type Prompt = {
  id: string; // UUID
  title: string;
  prompt: string;
  dateCreated: number;
  favorite: boolean;
  collectionId?: string;
};

export type Prompts = Prompt[];

export type Collection = {
  id: string;
  title: string;
  color: string;
};

export type Collections = Collection[];