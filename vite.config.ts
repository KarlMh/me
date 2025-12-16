import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve("./client"), // points to your client folder
  resolve: {
    alias: {
      "@": path.resolve("./client/src"), // @ -> src folder
      "@shared": path.resolve("./shared"),
      "@assets": path.resolve("./attached_assets"),
    },
  },
  build: {
    outDir: path.resolve("./dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
