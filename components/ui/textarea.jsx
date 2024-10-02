import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex h-[48px] bg-[transparent] w-full rounded-xl border border-tertiary border-opacity-30 focus:border-secondary px-4 py-5 placeholder:text-tertiary outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
