import { useLocation } from "react-router";
import { checkPrivateRoute, checkProtectedRoute } from "./helpers";

const useRouteGuard = () => {
  const { pathname, search } = useLocation();
  const isPrivateRoute = checkPrivateRoute(pathname);
  const isProtectedRoute = checkProtectedRoute(pathname);
  return [isPrivateRoute, isProtectedRoute, pathname, search] as const;
};

export { useRouteGuard };
