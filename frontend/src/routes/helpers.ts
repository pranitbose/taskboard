import {
  PrivatePaths,
  PrivatePathsWithParams,
  ProtectedPaths
} from "./constants";

const checkPrivateRoute = (pathname: string) =>
  Object.values(PrivatePaths).some(path =>
    PrivatePathsWithParams.includes(path)
      ? pathname.includes(path)
      : pathname === path
  );

const checkProtectedRoute = (pathname: string) =>
  Object.values(ProtectedPaths).includes(pathname);

export { checkPrivateRoute, checkProtectedRoute };
