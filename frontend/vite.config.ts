import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const rootDirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
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
      "@utils": resolve(rootDirname, "./src/utils")
    }
  }
});
