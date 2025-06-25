import { ErrorLayout, HomeLayout } from "@components/layouts";
import { AppErrorStatus } from "@features/error/utils/constants";
import { createBrowserRouter, Navigate, type RouteObject } from "react-router";
import { PathBuilder, PathEndpoints, PathParams } from "./constants";
import { RouteGuard } from "./route-guard";

const routes: RouteObject[] = [
  {
    path: PathEndpoints.HOME,
    element: <RouteGuard />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomeLayout />
      },
      {
        path: PathEndpoints.DASHBOARD,
        element: <div>Dashboard</div>
      },
      {
        path: `${PathEndpoints.BOARDS}/${PathParams.BOARD_ID}`,
        element: <div>Board</div>
      },
      {
        path: PathEndpoints.SETTINGS,
        element: <div>Settings</div>
      },
      {
        path: `${PathEndpoints.ERROR}/${PathParams.ERROR_STATUS}`,
        element: <ErrorLayout />
      },
      {
        path: "*",
        element: (
          <Navigate
            to={PathBuilder.buildErrorPathByStatus(AppErrorStatus.NotFound)}
            replace={true}
          />
        )
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export { router };
