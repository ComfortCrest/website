import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer"; // 🧠 bundle analyzer
import viteCompression from "vite-plugin-compression"; // 🧼 gzip assets

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    viteCompression(), // compress output (gzip)
    mode === "development" && componentTagger(),
    mode === "production" &&
      visualizer({
        filename: "dist/stats.html",
        open: true, // opens browser after build
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true, // needed for source-map-explorer
    minify: "terser", // better than esbuild for production
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // chunk 3rd party libs separately
          }
        },
      },
    },
  },
}));
