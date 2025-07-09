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
  workspaceId: z.string(),
  role: userRoleSchema,
  userId: z.string()
});

export { authenticatedUserSchema };
