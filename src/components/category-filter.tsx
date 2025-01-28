import { Badge } from "@/components/ui/badge";
import { type Category } from "@/types/";

const categories: Category[] = [
  {
    id: "1",
    title: "Writing",
    color: "",
  },
  {
    id: "2",
    title: "CodeGen",
    color: "",
  },
  {
    id: "3",
    title: "Debugging",
    color: "",
  },
  {
    id: "5",
    title: "Design Review",
    color: "",
  },
];

export function CategoryFilter() {
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
        {categories.length > 0 &&
          categories.map((category) => (
            <Badge
              variant="outline"
              onClick={() => filterPrompts(category.title)}
              className="cursor-pointer"
            >
              <div className="size-2 bg-primary rounded-full mr-1" />
              <span className="text-nowrap">{category.title}</span>
            </Badge>
          ))}
      </div>
    </div>
  );
}
