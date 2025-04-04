import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        stringing: 'src/components/stringing/index.tsx',
        splus: 'src/components/splus/index.tsx',
        remix: 'src/components/remix/index.tsx',
        track: 'src/components/track/index.tsx',
      },
      output: {
        dir: '../assets/',
        entryFileNames: 'vx-[name].js',
        chunkFileNames: 'vx-[name].js',
        assetFileNames: 'vx-[name].[ext]',
      },
    },
    emptyOutDir: false,
    watch: {},
  },
});
