// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://gsipos.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  integrations: [react()],
})
