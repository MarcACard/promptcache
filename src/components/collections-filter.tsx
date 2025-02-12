import { Badge } from "@/components/ui/badge";
import { CollectionDot } from "@/components/ui/collection-dot";
import { type Collections } from "@/types/";


const collections : Collections = [
  {
    id: "1",
    title: "All",
    color: "grey",
  },
  {
    id: "11",
    title: "Writing",
    color: "green",
  },
  {
    id: "2",
    title: "CodeGen",
    color: "purple",
  },
  {
    id: "3",
    title: "Debugging",
    color: "teal",
  },
  {
    id: "5",
    title: "Design Review",
    color: "orange",
  },
  {
    id: "6",
    title: "Language Tutor",
    color: "pink",
  },
];

export function CollectionsFilter() {
  // Filter Prompts
  const filterPrompts = (category: string) => {
    console.log(`Filter Prompts to: ${category}`);
  };
  return (
    <div
      tabIndex={-1}
      className="p-2 border-b overflow-x-auto no-scrollbar focus-visible:outline-none"
    >
      <div className="flex gap-2 ">
        {collections.length > 0 &&
          collections.map((collection) => (
            <Badge
              variant="outline"
              onClick={() => filterPrompts(collection.title)}
              className="cursor-pointer"
            >
              <CollectionDot className= "mr-1" size="xs" bgColor={collection.color}/>
              <span className="text-nowrap">{collection.title}</span>
            </Badge>
          ))}
      </div>
    </div>
  );
}
