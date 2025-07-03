import { selectAccessToken, useStore } from "@services/store";
import type { ReactElement } from "react";
import { Navigate, Outlet } from "react-router";
import { Paths } from "./constants";
import { useRouteGuard } from "./use-route-guard";

const RouteGuard = (): ReactElement => {
  const [isPrivateRoute, isProtectedRoute] = useRouteGuard();
  const accessToken = useStore(selectAccessToken) ?? "";
  const privateRouteWithNoTokens = isPrivateRoute && accessToken === "";

  // Private route & No tokens -> re-direct to Home screen
  if (privateRouteWithNoTokens) {
    return <Navigate to={Paths.HOME} replace={true} />;
  }
  // Protected route & logged in -> re-direct to Dashboard screen
  if (isProtectedRoute && accessToken !== "") {
    return <Navigate to={Paths.DASHBOARD} replace={true} />;
  }
  // Private route & logged in / Protected route & not logged in / Public route
  return <Outlet />;
};

export { RouteGuard };
