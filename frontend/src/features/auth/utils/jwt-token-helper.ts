import { decodeJwt } from "jose";
import {
  authenticatedUserSchema,
  type AuthenticatedUser
} from "../validators/authenticated-user-schema";

const verifyDecodeJwtToken = (jwtToken: string): AuthenticatedUser | null => {
  const { currentRole, userRoles, userId, firstName, lastName } =
    decodeJwt(jwtToken);
  const authenticatedUserResult = authenticatedUserSchema.safeParse({
    currentRole,
    userRoles,
    userId,
    firstName,
    lastName
  });
  if (!authenticatedUserResult.success) {
    return null;
  }
  const authenticatedUserFromToken = authenticatedUserResult.data;
  return {
    currentRole: authenticatedUserFromToken.currentRole,
    userRoles: authenticatedUserFromToken.userRoles,
    userId: authenticatedUserFromToken.userId,
    firstName: authenticatedUserFromToken.firstName,
    lastName: authenticatedUserFromToken.lastName
  };
};

export { verifyDecodeJwtToken };
