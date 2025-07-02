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
  type = "button",
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export { Button, type ButtonProps };
