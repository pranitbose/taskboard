"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@utils/cn";
import type { ComponentProps } from "react";

type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};

export { Label };
