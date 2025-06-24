import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const rooDirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@app": resolve(rooDirname, "./src"),
      "@assets": resolve(rooDirname, "./src/assets"),
      "@components": resolve(rooDirname, "./src/components"),
      "@hooks": resolve(rooDirname, "./src/hooks"),
      "@routes": resolve(rooDirname, "./src/routes"),
      "@styles": resolve(rooDirname, "./src/styles"),
      "@utils": resolve(rooDirname, "./src/utils")
    }
  }
});
