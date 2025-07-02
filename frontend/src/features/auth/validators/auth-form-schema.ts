import { Regex } from "@utils/matchers";
import { z } from "zod/v4";
import {
  validatePasswordsMatch,
  validatePasswordStrength
} from "../utils/validations";

const EmailSchema = z.email({
  error: issue => (!issue.input ? "Email is required." : "Email is invalid.")
});

const PasswordSchema = z
  .string("Password is required.")
  .min(8, {
    error: issue =>
      `Password must be at least ${String(issue.minimum)} characters long.`
  })
  .max(16, {
    error: issue =>
      `Password must be no more than ${String(issue.maximum)} characters long.`
  })
  .check(validatePasswordStrength);

const FirstNameSchema = z
  .string("First name is required.")
  .trim()
  .min(2, {
    error: issue =>
      `First name must be at least ${String(issue.minimum)} characters long.`
  })
  .max(50, {
    error: issue =>
      `First name must be no more than ${String(issue.maximum)} characters long.`
  })
  .regex(
    Regex.name,
    "First name must only contain letters, spaces, hyphens, and apostrophes."
  );

const LastNameSchema = z
  .string("Last name is required.")
  .trim()
  .min(2, {
    error: issue =>
      `Last name must be at least ${String(issue.minimum)} characters long.`
  })
  .max(50, {
    error: issue =>
      `Last name must be no more than ${String(issue.maximum)} characters long.`
  })
  .regex(
    Regex.name,
    "Last name must only contain letters, spaces, hyphens, and apostrophes."
  );

const AuthFormSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema
});

const LoginFormSchema = AuthFormSchema;

const SignUpFormSchema = z
  .object({
    firstName: FirstNameSchema,
    lastName: LastNameSchema,
    ...AuthFormSchema.shape,
    confirmPassword: z.string("Confirm password is required."),
    agreeTerms: z.boolean("You must agree to the terms and conditions.")
  })
  .check(validatePasswordsMatch);

type LoginFormValues = z.infer<typeof LoginFormSchema>;
type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export {
  LoginFormSchema,
  SignUpFormSchema,
  type LoginFormValues,
  type SignUpFormValues
};
