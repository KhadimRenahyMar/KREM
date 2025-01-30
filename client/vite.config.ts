/// <reference types="vitest" />
/// <reference types="vite/client" />
// import { PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
// import babel from "@rollup/plugin-babel";
import { compression } from "vite-plugin-compression2";
import { defineConfig } from "vitest/config";
// import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  cacheDir: "./node_modules/.vite/vador",

  server: {
    port: 4200,
    host: "localhost",
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [
    react(),

    compression({ algorithm: "gzip" }),
    viteTsConfigPaths({
      root: "./",
    }),
    // Unfonts({
    //   google: {
    //     preconnect: true,
    //     // injectTo: "head-prepend",
    //     families: [
    //       {
    //         name: "DM+Sans",
    //         styles: "ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
    //         defer: true,
    //       },
    //     ],
    //   },
    //   custom: {
    //     families: [
    //       {
    //         name: "Poppins",
    //         /**
    //          * Local name of the font. Used to add `src: local()` to `@font-rule`.
    //          */
    //         local: "Poppins",
    //         /**
    //          * Regex(es) of font files to import. The names of the files will
    //          * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
    //          */
    //         src: "./src/assets/fonts/Poppins/*.woff2",
    //       },
    //     ],
    //     display: "auto",
    //     preload: true,
    //     prefetch: false,
    //     injectTo: "head-prepend",
    //   },
    // }),
  ],

  build: {
    minify: "terser",
    terserOptions: {
      compress: true,
    },
    sourcemap: true,
    rollupOptions: {
      treeshake: "recommended",

      external: [],
      input: {
        main: "./index.html",
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      watch: {
        exclude: "node_modules/**",
      },
    },
  },

  // Uncomment this if you are using workers.
  worker: {
    plugins: () => [
      viteTsConfigPaths({
        root: "./",
      }),
    ],
  },

  test: {
    globals: true,
    cache: {
      dir: "./node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
