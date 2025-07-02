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

const AuthFormSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema
});

const LoginFormSchema = AuthFormSchema;

const SignUpFormSchema = z
  .object({
    // firstName: z.string(),
    // lastName: z.string(),
    ...AuthFormSchema.shape,
    confirmPassword: z.string("Confirm password is required.")
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
