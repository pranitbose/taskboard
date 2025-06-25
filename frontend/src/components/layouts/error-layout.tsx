import { RootErrorBoundary } from "@features/error/root-error-boundary";
import { useParams } from "react-router";

const ErrorLayout = () => {
  const { errorStatus } = useParams();

  return (
    <RootErrorBoundary
      errorStatus={errorStatus !== undefined ? +errorStatus : null}
    />
  );
};
export { ErrorLayout };
