import type { ReactElement } from "react";
import { Navigate, Outlet } from "react-router";
import { Paths } from "./constants";
import { useRouteGuard } from "./use-route-guard";

const RouteGuard = (): ReactElement => {
  const [isPrivateRoute, isProtectedRoute] = useRouteGuard();
  const jwtToken = getJwtToken();
  const privateRouteWithNoTokens = isPrivateRoute && jwtToken === "";

  // Private route & No tokens -> re-direct to Home screen
  if (privateRouteWithNoTokens) {
    return <Navigate to={Paths.HOME} replace={true} />;
  }
  // Protected route & logged in -> re-direct to Dashboard screen
  if (isProtectedRoute && jwtToken !== "") {
    return <Navigate to={Paths.DASHBOARD} replace={true} />;
  }
  // Private route & logged in / Protected route & not logged in / Public route
  return <Outlet />;
};

const getJwtToken = (): string => {
  // This function should retrieve the JWT token from a secure storage (e.g., localStorage, cookies)
  // For now, it returns an empty string to simulate no token
  return "";
};

export { RouteGuard };
