import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: "autoUpdate",

    includeAssets: ["favicon.png"],

    manifest: {
      id: "/tic-tac-toe/",
      name: "Tic Tac Toe",
      short_name: "Tic Tac Toe",
      description: "Jogo da velha para dois jogadores.",

      theme_color: "#211333",
      background_color: "#211333",

      display: "standalone",
      orientation: "portrait",
      start_url: "/",

      icons: [
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
  })
  ],
})
