import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [
    ViteEjsPlugin((viteConfig) => {
      return {
        root: viteConfig.root,
        domain: 'example.com',
        title: 'My vue project!',
      };
    }),
  ],
});
