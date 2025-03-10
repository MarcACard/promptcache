export type Prompt = {
  id: string; // UUID
  title: string;
  prompt: string;
  dateCreated: number;
  favorite: boolean;
  collectionId?: string;
};

export const ColorSet = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
  "grey",
] as const;

export type ColorSetType = (typeof ColorSet)[number];

export type Collection = {
  id: string;
  title: string;
  color: ColorSetType;
};

export type Prompts = Prompt[];
export type Collections = Collection[];
