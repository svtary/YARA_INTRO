import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import setting from "./src/settings.json";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
