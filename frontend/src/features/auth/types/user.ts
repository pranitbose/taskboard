import type { Roles } from "@utils/constants";

type AuthenticatedUser = {
  role: (typeof Roles)[keyof typeof Roles];
  workspaceId: string;
  userId: string;
};

export type { AuthenticatedUser };
