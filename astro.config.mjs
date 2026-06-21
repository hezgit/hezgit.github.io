import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://hezgit.github.io',
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
});
