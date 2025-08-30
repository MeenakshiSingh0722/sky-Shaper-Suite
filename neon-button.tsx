import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const neonButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-orbitron tracking-wide",
  {
    variants: {
      variant: {
        hero: "bg-gradient-neon text-text-inverse hover:shadow-glow-cyan hover:scale-105 transform transition-all duration-300",
        holo: "bg-gradient-holo text-text-primary border border-holo-cyan/50 hover:shadow-glow-violet backdrop-blur-sm",
        gold: "bg-gradient-gold text-text-inverse hover:shadow-glow-gold hover:scale-105 transform transition-all duration-300",
        glass: "bg-gradient-glass text-text-primary border border-glass-border hover:bg-glass-surface/20 backdrop-blur-lg",
        ghost: "text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/10 hover:shadow-glow-cyan",
        emergency: "bg-status-error text-text-primary hover:shadow-glow-violet border border-status-error animate-glow-pulse",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
NeonButton.displayName = "NeonButton";

export { NeonButton, neonButtonVariants };