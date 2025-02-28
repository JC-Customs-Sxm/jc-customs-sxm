import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(), // Enables React Fast Refresh and other React optimizations
    visualizer({
      open: true, // Automatically opens the report in your browser
      filename: "dist/stats.html", // Output file name for the bundle analysis report
    }),
  ],
  build: {
    minify: "terser", // Minify using Terser for smaller bundle size
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Group large dependencies into separate chunks
          react: ["react", "react-dom"],
          framer: ["framer-motion"],
          i18next: ["i18next", "react-i18next"],
          lottie: ["lottie-react", "lottie-web"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  server: {
    port: 3000, // Set the development server port
    open: true, // Automatically open the app in the browser
  },
  preview: {
    port: 3000, // Set the preview server port
    open: true, // Automatically open the app in the browser
  },
  optimizeDeps: {
    include: [
      // Pre-bundle dependencies for faster development builds
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lottie-react",
      "lottie-web",
    ],
  },
});
