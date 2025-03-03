import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "dist/stats.html",
    }),
    imagetools({
      force: true,
      include: "**/*.{heic,heif,avif,jpeg,jpg,png,tiff,webp,gif}",
      exclude: "**/screenshot.{png,jpg,jpeg}",
      defaultDirectives: (url) => {
        if (url.includes("icon")) {
          return new URLSearchParams({ format: "png" });
        }

        return new URLSearchParams({ format: "webp", quality: 75 });
      },
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          framer: ["framer-motion"],
          i18next: ["i18next", "react-i18next"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
  },
});
