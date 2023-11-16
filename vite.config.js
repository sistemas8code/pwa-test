import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      // strategies: 'injectManifest',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/icons/icon-192-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/icons/icon-512-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
     })
  ],
})
