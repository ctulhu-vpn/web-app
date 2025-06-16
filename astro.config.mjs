// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  server: {
    host: process.env.IS_DOCKER ? "0.0.0.0" : "localhost",
  },
  integrations: [
    starlight({
      title: "🐙 Ctulhu Team",
      social: [
        {
          icon: "seti:liquid",
          label: "Boosty",
          href: "https://boosty.to/ctulhu-vpn",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ctulhu-vpn/web-app",
        },
      ],
      sidebar: [
        {
          label: "Установка",
          autogenerate: { directory: "install" },
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
    }),
  ],
})
