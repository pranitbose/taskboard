import { Paths } from "@routes/constants";
import { login } from "@services/api/auth";
import { selectSetTokens, useStore } from "@services/store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useLogin = () => {
  const setTokens = useStore(selectSetTokens);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: async authTokens => {
      setTokens(authTokens);
      await navigate(Paths.DASHBOARD, { replace: true });
    }
  });
};

export { useLogin };
