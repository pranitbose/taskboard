import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  LoginFormSchema,
  type LoginFormValues
} from "../../validators/auth-form-schema";
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

const LoginRoot = AuthRoot;

const LoginHeader = AuthHeader;

const LoginTitle = AuthTitle;

const LoginDescription = AuthDescription;

const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema)
  });

  const handleLogin: SubmitHandler<LoginFormValues> = () => {};

  return (
    <AuthForm<LoginFormValues> form={form} onSubmit={handleLogin}>
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
      <AuthSubmitButton>Login</AuthSubmitButton>
    </AuthForm>
  );
};

const LoginFooterText = AuthFooterText;

const LoginFooterLink = AuthFooterLink;

export {
  LoginDescription,
  LoginFooterLink,
  LoginFooterText,
  LoginForm,
  LoginHeader,
  LoginRoot,
  LoginTitle
};
