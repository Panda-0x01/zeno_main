import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        // Primary CTA: mint-to-emerald gradient with a soft ambient glow.
        default:
          "btn-glow bg-[linear-gradient(135deg,#b8f7d8_0%,#4ade80_52%,#22c55e_100%)] text-[#04120c] hover:brightness-105 active:brightness-95",
        // Quiet glass button for secondary emphasis.
        outline:
          "border border-white/12 bg-white/[0.035] text-foreground backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.07]",
        ghost: "text-muted hover:bg-white/[0.05] hover:text-foreground",
        // Solid light button, used rarely for contrast on tinted panels.
        ink: "bg-foreground text-background hover:bg-white",
        link: "h-auto p-0 text-accent-text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
