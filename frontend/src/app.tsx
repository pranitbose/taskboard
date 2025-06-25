import { router } from "@routes/config";
import type { ReactElement } from "react";
import { RouterProvider } from "react-router";

const App = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
