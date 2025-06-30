import { z } from "zod/v4";

const AuthFormSchema = z.object({
  email: z.email(),
  password: z.string()
});

const LoginFormSchema = AuthFormSchema;

const SignUpFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  ...AuthFormSchema.shape,
  confirmPassword: z.string()
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;
type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export {
  LoginFormSchema,
  SignUpFormSchema,
  type LoginFormValues,
  type SignUpFormValues
};
