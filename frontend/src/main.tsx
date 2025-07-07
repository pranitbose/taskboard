import { App } from "@app/app";
import "@styles/main.css";
import { env } from "@validators/env";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

if (env.APP_ENV === "local") {
  const { enableApiMocking } = await import("@app/mocks");
  await enableApiMocking();
}

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
