import { decodeJwt } from "jose";
import type { AuthenticatedUser } from "../types/user";
import { authenticatedUserSchema } from "../validators/authenticated-user-schema";

const verifyDecodeJwtToken = (jwtToken: string): AuthenticatedUser | null => {
  const { role, workspace_id: workspaceId, sub: userId } = decodeJwt(jwtToken);
  const authenticatedUserResult = authenticatedUserSchema.safeParse({
    role,
    workspaceId,
    userId
  });
  if (!authenticatedUserResult.success) {
    return null;
  }
  const authenticatedUserFromToken = authenticatedUserResult.data;
  return {
    role: authenticatedUserFromToken.role.name,
    workspaceId: authenticatedUserFromToken.workspaceId,
    userId: authenticatedUserFromToken.userId
  };
};

export { verifyDecodeJwtToken };
