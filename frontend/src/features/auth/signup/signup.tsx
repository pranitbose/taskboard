import { Paths } from "@routes/constants";
import {
  SignUpDescription,
  SignUpFooterLink,
  SignUpFooterText,
  SignUpForm,
  SignUpHeader,
  SignUpRoot,
  SignUpTitle
} from "../components/form/signup-form";

const SignUp = () => {
  return (
    <SignUpRoot>
      <SignUpHeader>
        <SignUpTitle>Create an account</SignUpTitle>
        <SignUpDescription>
          Let&apos;s get started. Fill in the details below to create your
          account.
        </SignUpDescription>
      </SignUpHeader>
      <SignUpForm />
      <SignUpFooterText>
        Already have account?&nbsp;
        <SignUpFooterLink to={Paths.HOME} replace>
          Login
        </SignUpFooterLink>
      </SignUpFooterText>
    </SignUpRoot>
  );
};

export { SignUp };
