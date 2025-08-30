import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "minimal";
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl border backdrop-blur-lg",
          {
            "bg-gradient-glass border-glass-border shadow-glass": variant === "default",
            "bg-gradient-glass border-neon-cyan/30 shadow-glow-cyan": variant === "glow",
            "bg-space-nebula/20 border-space-nebula/30 shadow-none": variant === "minimal",
          },
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };