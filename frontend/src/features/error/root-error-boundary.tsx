import { Button } from "@components/ui/button";
import { Paths } from "@routes/constants";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import { getErrorState } from "./utils/helpers";

type RootErrorBoundaryProps = {
  errorStatus: number | null;
};

const RootErrorBoundary = ({ errorStatus }: RootErrorBoundaryProps) => {
  const error = useRouteError();
  const status =
    errorStatus ?? (isRouteErrorResponse(error) ? error.status : null);
  const { Icon, title, description, showBackToHomeBtn } = getErrorState(status);

  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center gap-2 px-4 text-center">
      <Icon className="text-primary size-14 mb-2" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="container text-muted-foreground">{description}</p>
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
