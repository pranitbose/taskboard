import {
  LoginDescription,
  LoginFooterLink,
  LoginFooterText,
  LoginForm,
  LoginHeader,
  LoginRoot,
  LoginTitle
} from "../components/form/login-form";

const Login = () => {
  return (
    <LoginRoot>
      <LoginHeader>
        <LoginTitle>Welcome</LoginTitle>
        <LoginDescription>
          Log in to unlock tailored content and stay connected with your
          community.
        </LoginDescription>
      </LoginHeader>
      <LoginForm />
      <LoginFooterText>
        Don&apos;t have an account?&nbsp;
        <LoginFooterLink>Sign up</LoginFooterLink>
      </LoginFooterText>
    </LoginRoot>
  );
};

export { Login };
