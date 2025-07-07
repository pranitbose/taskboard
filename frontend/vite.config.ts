import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";

const rootDirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(rootDirname, "./environments"), "");

  return {
    define: {
      "import.meta.env.APP_ENV": JSON.stringify(env["APP_ENV"]),
      "import.meta.env.APP_DOMAIN": JSON.stringify(env["APP_DOMAIN"]),
      "import.meta.env.API_BASE_URL": JSON.stringify(env["API_BASE_URL"])
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@app": resolve(rootDirname, "./src"),
        "@assets": resolve(rootDirname, "./src/assets"),
        "@components": resolve(rootDirname, "./src/components"),
        "@contexts": resolve(rootDirname, "./src/contexts"),
        "@features": resolve(rootDirname, "./src/features"),
        "@hooks": resolve(rootDirname, "./src/hooks"),
        "@routes": resolve(rootDirname, "./src/routes"),
        "@services": resolve(rootDirname, "./src/services"),
        "@styles": resolve(rootDirname, "./src/styles"),
        "@utils": resolve(rootDirname, "./src/utils"),
        "@validators": resolve(rootDirname, "./src/validators")
      }
    }
  };
});
