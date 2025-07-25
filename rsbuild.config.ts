import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  output: {
    distPath: {
      root: "docs",
    },
    assetPrefix: "./",
  },
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/entry.tsx",
    },
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
});
