import { Paths } from "@routes/constants";
import { register } from "@services/api/auth";
import { selectSetTokens, useStore } from "@services/store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useSignUp = () => {
  const setTokens = useStore(selectSetTokens);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: async authTokens => {
      setTokens(authTokens);
      await navigate(Paths.DASHBOARD, { replace: true });
    }
  });
};

export { useSignUp };
