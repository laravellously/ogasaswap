import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import inject from "@rollup/plugin-inject";
// import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // inject({
    //   util: "util/",
    // }),
  ],
  // define: {
  //   global: "globalThis",
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // build: {
  //   rollupOptions: {
  //     plugins: [nodePolyfills({
  //       include: 'util'
  //     })],
  //   },
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     // Node.js global to browser globalThis
  //     define: {
  //       global: "globalThis",
  //     },
  //     // Enable esbuild polyfill plugins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         buffer: true,
  //       }),
  //     ],
  //   },
  // }
})