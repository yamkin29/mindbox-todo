import { defineConfig, type UserConfig as ViteUserConfig } from "vite";
import type { UserConfig as VitestUserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
    css: true,
  },
} as ViteUserConfig & { test: VitestUserConfig["test"] });