import { Badge } from "@/components/ui/badge";
import { type Category } from "@/types/";

const categories: Category[] = [
  {
    id: "1",
    title: "Content Marketer",
    color: "",
  },
  {
    id: "2",
    title: "Writing",
    color: "",
  },
  {
    id: "3",
    title: "Coding",
    color: "",
  },
];

export function CategoryFilter() {
  // Filter Prompts
  const filterPrompts = (category: string) => {
    console.log(`Filter Prompts to: ${category}`);
  };
  return (
    <div className="flex gap-2 p-2 overflow-x-scroll">
      {categories.length > 0 &&
        categories.map((category) => (
          <Badge
            variant="outline"
            onClick={() => filterPrompts(category.title)}
            className="cursor-pointer"
          >
            <div className="size-2 bg-primary rounded-full mr-1" />
            <span>{category.title}</span>
          </Badge>
        ))}
    </div>
  );
}
