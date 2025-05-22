import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  siteUrl: "https://inverloper.vercel.app",
  generateRobotsTxt: true,
  plugins: [react(), tailwindcss()],
});
