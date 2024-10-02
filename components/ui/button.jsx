import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-full inline-flex items-center justify-center transition-all whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "text-[white] bg-primary hover:bg-[transparent] hover:text-primary hover:border-[1.5px]",
        secondary: "text-primary bg-[transparent] h-[36px] px-6 border-[1.5px] hover:bg-primary hover:text-[white] hover:border-2",
      },
      size: {
        default: "h-[40px] px-6",
        sm: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm tracking-[2px] uppercase",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
