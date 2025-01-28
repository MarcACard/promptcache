import { Badge } from "@/components/ui/badge";
import { type Category } from "@/types/";

import { cn } from "@/utils";

const categories: Category[] = [
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
              <div
                style={{ backgroundColor: category.color }}
                className="size-2 rounded-full mr-1"
              />
              <span className="text-nowrap">{category.title}</span>
            </Badge>
          ))}
      </div>
    </div>
  );
}
