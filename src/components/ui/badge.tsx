import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium mono-tag transition-colors",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/[0.04] text-muted",
        accent: "border-accent/25 bg-accent/10 text-accent-text",
        signal: "border-accent/25 bg-accent/10 text-accent-text",
        violet: "border-violet/25 bg-violet/10 text-violet",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
