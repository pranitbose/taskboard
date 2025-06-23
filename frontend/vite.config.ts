import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const rooDirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve(rooDirname, "./src"),
      "@assets": resolve(rooDirname, "./src/assets"),
      "@components": resolve(rooDirname, "./src/components"),
      "@hooks": resolve(rooDirname, "./src/hooks")
    }
  }
});
