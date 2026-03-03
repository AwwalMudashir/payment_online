import fs from 'fs';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // disable https for local development to avoid browser certificate warnings
    // `false as any` silences TS since ServerOptions is expected when key exists
    https: false as any,
    port: 5173,
  },  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.cjs",
  },
});
