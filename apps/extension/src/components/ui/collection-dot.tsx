import * as React from "react";
import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const dotVariants = cva(
  "rounded-full disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "border",
        solid: "border border-2",
        outline: "border border-dashed border-2",
      },
      size: {
        xs: "w-2 h-2",
        sm: "w-3 h-3",
        default: "w-6 h-6",
      },
      bgColor: {
        blue: "bg-primary border-primary",
        purple: "bg-violet-500 border-violet-500",
        teal: "bg-teal-300 border-teal-300",
        green: "bg-emerald-500 border-emerald-500",
        yellow: "bg-yellow-400 border-yellow-400",
        orange: "bg-orange-400 border-orange-400",
        pink: "bg-pink-400 border-pink-400",
        red: "bg-red-500 border-red-500",
        grey: "bg-neutral-500 border-neutral-500"
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
