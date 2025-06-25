import { Paths } from "@app/routes/constants";
import { Button } from "@components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import { getErrorState } from "./utils/helpers";

type RootErrorBoundaryProps = {
  errorStatus: number | null;
};

const RootErrorBoundary = ({ errorStatus }: RootErrorBoundaryProps) => {
  const error = useRouteError();
  const status =
    errorStatus ?? (isRouteErrorResponse(error) ? error.status : null);
  const { title, description, showBackToHomeBtn } = getErrorState(status);

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-2 px-4 overflow-y-auto">
      {/* <icon className="text-6xl text-primary" /> */}
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      {showBackToHomeBtn && (
        <Button className="mt-4" asChild>
          <Link to={Paths.HOME} replace>
            Back to Home
          </Link>
        </Button>
      )}
    </main>
  );
};

export { RootErrorBoundary };
