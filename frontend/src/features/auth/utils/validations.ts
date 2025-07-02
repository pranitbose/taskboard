import { Matchers } from "@utils/matchers";
import { ZodIssueCode } from "@utils/zod-helpers";
import { z } from "zod/v4";

const validatePasswordStrength = (ctx: z.core.ParsePayload<string>) => {
  if (!Matchers.containsUppercase(ctx.value)) {
    ctx.issues.push({
      code: ZodIssueCode.custom,
      message: "Password must include at least one uppercase letter.",
      input: ctx.value
    });
  }
  if (!Matchers.containsLowercase(ctx.value)) {
    ctx.issues.push({
      code: ZodIssueCode.custom,
      message: "Password must include at least one lowercase letter.",
      input: ctx.value
    });
  }
  if (!Matchers.containsDigit(ctx.value)) {
    ctx.issues.push({
      code: ZodIssueCode.custom,
      message: "Password must include at least one number.",
      input: ctx.value
    });
  }
  if (!Matchers.containsSpecialCharacter(ctx.value)) {
    ctx.issues.push({
      code: ZodIssueCode.custom,
      message:
        "Password must include at least one special character (!@#$%^&*).",
      input: ctx.value
    });
  }
};

const validatePasswordsMatch = (
  ctx: z.core.ParsePayload<{ password: string; confirmPassword: string }>
) => {
  const { password, confirmPassword } = ctx.value;
  if (password !== confirmPassword) {
    ctx.issues.push({
      code: ZodIssueCode.custom,
      path: ["confirmPassword"],
      message: "Passwords do not match.",
      input: ctx.value
    });
  }
};

export { validatePasswordsMatch, validatePasswordStrength };
