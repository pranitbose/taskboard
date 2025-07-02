import type {
  LoginFormValues,
  SignUpFormValues
} from "../validators/auth-form-schema";

const getDefaultValuesSignUpForm = (): SignUpFormValues => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false
});

const getDefaultValuesLoginForm = (): LoginFormValues => ({
  email: "",
  password: ""
});

export { getDefaultValuesLoginForm, getDefaultValuesSignUpForm };
