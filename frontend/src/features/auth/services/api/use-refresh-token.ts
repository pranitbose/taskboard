import { refreshToken } from "@services/api/auth";
import { selectSetTokens, useStore } from "@services/store";
import { useMutation } from "@tanstack/react-query";

const useRefreshToken = () => {
  const setTokens = useStore(selectSetTokens);

  return useMutation({
    mutationFn: refreshToken,
    onSuccess: authTokens => {
      setTokens(authTokens);
    }
  });
};

export { useRefreshToken };
