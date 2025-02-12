import * as React from "react";
import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const dotVariants = cva(
  "rounded-full disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "",
        solid: "border border-2",
        outline: "border border-dotted border-2",
      },
      size: {
        xs: "w-2 h-2",
        sm: "w-3 h-3",
        default: "w-6 h-6",
      },
      bgColor: {
        purple: "bg-collection-purple",
        teal: "bg-collection-teal",
        green: "bg-collection-green",
        yellow: "bg-collection-yellow",
        orange: "bg-collection-orange",
        pink: "bg-collection-pink",
        red: "bg-collection-red",
        grey: "bg-collection-grey"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type CollectionDotProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dotVariants>;

export function CollectionDot({
  className,
  variant,
  bgColor,
  size,
  ...props
}: CollectionDotProps) {
  return (
    <div
      className={cn(dotVariants({ variant, size, bgColor, className }))}
      {...props}
    />
  );
}
