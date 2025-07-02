import { Button, type ButtonProps } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";
import { Input, type InputProps } from "@components/ui/input";
import { cn } from "@utils/cn";
import type { ComponentProps } from "react";
import type {
  FieldValues,
  SubmitHandler,
  UseFormReturn
} from "react-hook-form";
import { Link, type LinkProps } from "react-router";

const AuthRoot = ({ className, children, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-6", className)} {...props}>
    {children}
  </div>
);

const AuthHeader = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col items-center gap-2 text-center", className)}
    {...props}
  >
    {children}
  </div>
);

const AuthTitle = ({ className, children, ...props }: ComponentProps<"h1">) => (
  <h1 className={cn("text-2xl font-bold md:text-3xl", className)} {...props}>
    {children}
  </h1>
);

const AuthDescription = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("text-muted-foreground text-sm text-balance", className)}
    {...props}
  >
    {children}
  </p>
);

type AuthFormProps<TFormValues extends FieldValues> = {
  form: UseFormReturn<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
} & Omit<ComponentProps<"form">, "onSubmit">;

const AuthForm = <TFormValues extends FieldValues>({
  form,
  onSubmit,
  className,
  ...props
}: AuthFormProps<TFormValues>) => {
  return (
    <Form<TFormValues> {...form}>
      <form
        onSubmit={event => void form.handleSubmit(onSubmit)(event)}
        className={cn("flex flex-col gap-6", className)}
        noValidate
        {...props}
      />
    </Form>
  );
};

const AuthFormField = FormField;

const AuthFormItem = FormItem;

const AuthFormLabel = FormLabel;

const AuthFormControl = FormControl;

const AuthFormMessage = FormMessage;

const AuthFormEmailInput = ({ ...props }: InputProps) => (
  <FormControl>
    <Input type="email" placeholder="mail@example.com" {...props} />
  </FormControl>
);

const AuthFormPasswordInput = ({ ...props }: InputProps) => (
  <FormControl>
    <Input type="password" {...props} />
  </FormControl>
);

const AuthSubmitButton = ({ className, children, ...props }: ButtonProps) => (
  <Button type="submit" className={cn("w-full", className)} {...props}>
    {children}
  </Button>
);

const AuthFooterText = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("text-muted-foreground text-center text-sm", className)}
    {...props}
  >
    {children}
  </p>
);

const AuthFooterLink = ({ ...linkProps }: LinkProps) => (
  <Button variant="link" className="underline p-0" asChild>
    <Link {...linkProps} />
  </Button>
);

export {
  AuthDescription,
  AuthFooterLink,
  AuthFooterText,
  AuthForm,
  AuthFormControl,
  AuthFormEmailInput,
  AuthFormField,
  AuthFormItem,
  AuthFormLabel,
  AuthFormMessage,
  AuthFormPasswordInput,
  AuthHeader,
  AuthRoot,
  AuthSubmitButton,
  AuthTitle
};
