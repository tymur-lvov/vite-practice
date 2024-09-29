import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/partials/**/*.html',
          dest: 'src/partials/html',
        },
      ],
    }),
  ],
  base: '/vite-practice/',
});
