import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "us"
      },
      components: {
        page: "components/storyblok/pageTypes/page",
        panel_hero: "components/storyblok/panels/panel_hero",
        panel_text: "components/storyblok/panels/panel_text"
      },
      enableFallbackComponent: true,
      customFallbackComponent: "components/storyblok/fallback"
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})