import { Badge } from "@/components/ui/badge";
import { type Collections } from "@/types/";


const collections: Collections = [
  {
    id: "11",
    title: "All",
    color: "#5E6BD2",
  },
  {
    id: "1",
    title: "Writing",
    color: "#5E6BD2",
  },
  {
    id: "2",
    title: "CodeGen",
    color: "#01A8C2",
  },
  {
    id: "3",
    title: "Debugging",
    color: "#EB5756",
  },
  {
    id: "5",
    title: "Design Review",
    color: "#F38E82",
  },
  {
    id: "6",
    title: "yeah",
    color: "#F38E82",
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
              <div
                style={{ backgroundColor: collection.color }}
                className="size-2 rounded-full mr-1"
              />
              <span className="text-nowrap">{collection.title}</span>
            </Badge>
          ))}
      </div>
    </div>
  );
}
