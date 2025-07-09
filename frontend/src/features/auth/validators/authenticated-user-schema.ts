import { Roles } from "@utils/constants";
import { z } from "zod/v4";

const userRoleSchema = z.object({
  id: z.string(),
  name: z.union([
    z.literal(Roles.VIEWER),
    z.literal(Roles.MEMBER),
    z.literal(Roles.ADMIN),
    z.literal(Roles.OWNER)
  ])
});

const authenticatedUserSchema = z.object({
  currentRole: userRoleSchema,
  userRoles: z.array(userRoleSchema),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string()
});

type AuthenticatedUser = z.infer<typeof authenticatedUserSchema>;

export { authenticatedUserSchema, type AuthenticatedUser };
