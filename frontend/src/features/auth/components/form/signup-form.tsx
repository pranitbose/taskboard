import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  SignUpFormSchema,
  type SignUpFormValues
} from "../..//validators/auth-form-schema";
import {
  AuthDescription,
  AuthFooterLink,
  AuthFooterText,
  AuthForm,
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
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSignUp: SubmitHandler<SignUpFormValues> = () => {};

  return (
    <AuthForm<SignUpFormValues> form={form} onSubmit={handleSignUp}>
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
            <AuthFormPasswordInput {...field} />
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
      <AuthSubmitButton>Sign up</AuthSubmitButton>
    </AuthForm>
  );
};

const SignUpFooterText = AuthFooterText;

const SignUpFooterLink = AuthFooterLink;

export {
  SignUpDescription,
  SignUpFooterLink,
  SignUpFooterText,
  SignUpForm,
  SignUpHeader,
  SignUpRoot,
  SignUpTitle
};
