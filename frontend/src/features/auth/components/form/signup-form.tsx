import { Checkbox } from "@components/ui/checkbox";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Paths } from "@routes/constants";
import type { ReactNode } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useSignUp } from "../../services/api";
import { getDefaultValuesSignUpForm } from "../../utils/form-helpers";
import {
  SignUpFormSchema,
  type SignUpFormValues
} from "../../validators/auth-form-schema";
import {
  AuthDescription,
  AuthFooterLink,
  AuthFooterText,
  AuthForm,
  AuthFormControl,
  AuthFormDescription,
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
} from "./auth-form";

const SignUpRoot = AuthRoot;

const SignUpHeader = AuthHeader;

const SignUpTitle = AuthTitle;

const SignUpDescription = AuthDescription;

const SignUpForm = () => {
  const form = useForm<SignUpFormValues>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: getDefaultValuesSignUpForm()
  });
  const { mutate: register } = useSignUp();

  const handleSignUp: SubmitHandler<SignUpFormValues> = formValues => {
    register(formValues);
  };

  return (
    <AuthForm<SignUpFormValues> form={form} onSubmit={handleSignUp}>
      <AuthFormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <AuthFormItem className="gap-3">
            <AuthFormLabel>First name</AuthFormLabel>
            <AuthFormControl>
              <Input type="text" placeholder="John" {...field} />
            </AuthFormControl>
            <AuthFormMessage />
          </AuthFormItem>
        )}
      />
      <AuthFormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <AuthFormItem className="gap-3">
            <AuthFormLabel>Last name</AuthFormLabel>
            <AuthFormControl>
              <Input type="text" placeholder="Doe" {...field} />
            </AuthFormControl>
            <AuthFormMessage />
          </AuthFormItem>
        )}
      />
      <AuthFormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <AuthFormItem className="gap-3">
            <AuthFormLabel>Email</AuthFormLabel>
            <AuthFormEmailInput {...field} />
            <AuthFormMessage />
          </AuthFormItem>
        )}
      />
      <AuthFormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <AuthFormItem className="gap-3">
            <AuthFormLabel>Password</AuthFormLabel>
            <AuthFormPasswordInput
              {...field}
              onChange={event => {
                field.onChange(event);
                void form.trigger("confirmPassword");
              }}
            />
            <AuthFormDescription>
              Must be 8&#x2010;16 characters with at least one uppercase letter,
              one lowercase letter, one number, and one special character (e.g.,
              !@#$%^&*).
            </AuthFormDescription>
            <AuthFormMessage />
          </AuthFormItem>
        )}
      />
      <AuthFormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <AuthFormItem className="gap-3">
            <AuthFormLabel>Confirm password</AuthFormLabel>
            <AuthFormPasswordInput {...field} />
            <AuthFormMessage />
          </AuthFormItem>
        )}
      />
      <AuthFormField
        control={form.control}
        name="agreeTerms"
        render={({ field }) => (
          <AuthFormItem className="gap-3">
            <div className="flex flex-row items-center gap-2">
              <AuthFormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                  disabled={field.disabled}
                />
              </AuthFormControl>
              <AuthFormLabel className="text-sm font-normal">
                I agree to the Terms & Conditions
              </AuthFormLabel>
            </div>
            <AuthFormMessage />
          </AuthFormItem>
        )}
      />
      <AuthSubmitButton>Sign up</AuthSubmitButton>
    </AuthForm>
  );
};

const SignUpFooterText = AuthFooterText;

const SignUpFooterLink = ({ children }: { children: ReactNode }) => (
  <AuthFooterLink to={Paths.HOME} replace>
    {children}
  </AuthFooterLink>
);

export {
  SignUpDescription,
  SignUpFooterLink,
  SignUpFooterText,
  SignUpForm,
  SignUpHeader,
  SignUpRoot,
  SignUpTitle
};
