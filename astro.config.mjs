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
        experience: "components/storyblok/pageTypes/experience",
        project: "components/storyblok/pageTypes/project",
        panel_columns: "components/storyblok/panels/panel_columns",
        panel_hero: "components/storyblok/panels/panel_hero",
        panel_project_detail: "components/storyblok/panels/panel_project_detail",
        panel_section: "components/storyblok/panels/panel_section",
        panel_text: "components/storyblok/panels/panel_text",
        widget_button: "components/storyblok/widgets/widget_button",
        widget_list: "components/storyblok/widgets/widget_list",
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