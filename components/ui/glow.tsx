import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

function Glow({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100",
          variant === "center" && "-translate-y-1/2",
        )}
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 85% 10%, 95% 15%, 100% 25%, 100% 50%, 95% 60%, 90% 75%, 85% 85%, 75% 100%, 25% 100%, 15% 90%, 10% 80%, 5% 65%, 0% 50%, 0% 25%, 5% 15%, 15% 5%)",
        }}
      />
      <div
        className={cn(
          "from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100",
          variant === "center" && "-translate-y-1/2",
        )}
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 80% 8%, 90% 12%, 100% 30%, 100% 50%, 95% 65%, 88% 78%, 80% 90%, 70% 100%, 30% 100%, 20% 92%, 12% 82%, 8% 68%, 0% 50%, 0% 30%, 8% 18%, 20% 8%)",
        }}
      />
    </div>
  );
}

export default Glow;
