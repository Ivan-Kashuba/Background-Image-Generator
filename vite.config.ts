import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/zeely_test_task/",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/features": path.resolve(__dirname, "./src/features"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
