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
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Install",
          autogenerate: { directory: "install" },
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
    }),
  ],
})
