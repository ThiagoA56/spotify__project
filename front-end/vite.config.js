import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//to avoid the top level await error before the npm run build(terminal)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { target: "esnext" },
});
