import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//
// `base: "./"` emits *relative* asset URLs. This makes the same build work on
// BOTH a GitHub user/organization page (https://username.github.io/) and a
// project page (https://username.github.io/repo-name/) with no extra config.
// If you ever switch to client-side routing with real paths, change this to
// "/your-repo-name/" instead.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    target: "es2020",
    cssMinify: true,
    // Small, single-page app: keep one chunk to avoid extra round-trips.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
