export type Prompt = {
  id: string; // UUID
  title: string;
  prompt: string;
  dateCreated: number;
  favorite: boolean;
  collectionId?: string;
};

export type Collection = {
  id: string;
  title: string;
  color:
    | "purple"
    | "teal"
    | "green"
    | "yellow"
    | "orange"
    | "pink"
    | "red"
    | "grey";
};

export type Prompts = Prompt[];
export type Collections = Collection[];
