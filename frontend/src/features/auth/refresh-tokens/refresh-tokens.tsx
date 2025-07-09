import { sessionStorage, SessionStorageKeys } from "@services/web-store";
import { useEffect, useRef, type ReactElement } from "react";
import { useRefreshToken } from "../services/api";

const RefreshTokens = (): ReactElement | null => {
  const { mutate: refreshToken, isPending } = useRefreshToken();
  const hasRefreshedToken = useRef(false);

  useEffect(() => {
    const handleTokenRefresh = () => {
      const persistedRefreshToken =
        sessionStorage.get(SessionStorageKeys.REFRESH_TOKEN) ?? null;
      hasRefreshedToken.current = true;
      if (persistedRefreshToken === null) {
        return;
      }
      refreshToken(persistedRefreshToken);
    };

    if (!hasRefreshedToken.current) {
      handleTokenRefresh();
    }
  }, [refreshToken]);

  // Refreshing tokens -> render fullscreen loader
  if (isPending) {
    return (
      <h1 className="flex h-dvh justify-center items-center">Loading...</h1>
    );
  }
  // Success/Error -> render nothing
  return null;
};

export { RefreshTokens };
