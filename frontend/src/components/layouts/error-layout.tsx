import { Footer } from "@components/footer";
import { RootErrorBoundary } from "@features/error/root-error-boundary";
import { useParams } from "react-router";

const ErrorLayout = () => {
  const { errorStatus } = useParams();

  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-items-center min-h-dvh">
      <RootErrorBoundary
        errorStatus={errorStatus !== undefined ? +errorStatus : null}
      />
      <Footer />
    </div>
  );
};
export { ErrorLayout };
