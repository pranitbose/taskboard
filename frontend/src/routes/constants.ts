import { filter } from "@utils/object-helpers";

const PathEndpoints = {
  HOME: "/",
  ERROR: "error",
  SIGNUP: "signup",
  DASHBOARD: "dashboard",
  BOARDS: "boards",
  PROFILE: "profile",
  SETTINGS: "settings"
};

const PathParams = {
  ERROR_STATUS: ":errorStatus",
  BOARD_ID: ":boardId"
};

const Paths = {
  HOME: PathEndpoints.HOME,
  ERROR: `/${PathEndpoints.ERROR}`,
  SIGNUP: `/${PathEndpoints.SIGNUP}`,
  DASHBOARD: `/${PathEndpoints.DASHBOARD}`,
  BOARDS: `/${PathEndpoints.BOARDS}`,
  PROFILE: `/${PathEndpoints.PROFILE}`,
  SETTINGS: `/${PathEndpoints.SETTINGS}`
};

const PrivatePathsWithParams = [Paths.BOARDS];

const PathBuilder = {
  buildErrorPathByStatus: (errorStatus: number) =>
    `${Paths.ERROR}/${String(errorStatus)}`,
  buildBoardPathById: (boardId: string) => `${Paths.BOARDS}/${boardId}`
};

const publicPathList = [Paths.ERROR];
const protectedPathList = [Paths.HOME, Paths.SIGNUP];

const PrivatePaths = filter(
  Paths,
  (_key, pathValue) =>
    !publicPathList.includes(pathValue) &&
    !protectedPathList.includes(pathValue)
);

const ProtectedPaths = filter(Paths, (_key, pathValue) =>
  protectedPathList.includes(pathValue)
);

export {
  PathBuilder,
  PathEndpoints,
  PathParams,
  Paths,
  PrivatePaths,
  PrivatePathsWithParams,
  ProtectedPaths
};
