import { Slot } from "@radix-ui/react-slot";
import { cn } from "@utils/cn";
import type { ComponentProps } from "react";
import { buttonVariants, type ButtonVariantProps } from "./variants";

type ButtonProps = ComponentProps<"button"> &
  ButtonVariantProps & {
    asChild?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export { Button };
