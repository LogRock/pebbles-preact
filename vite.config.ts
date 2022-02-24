import { defineConfig } from 'vite'
const path = require('path')
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: '@logrock/pebbles',
      fileName: (format) => `logrock-pebbles.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['preact', 'styled-components'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          preact: 'Preact',
          'styled-components': 'styled'
        }
      }
    }
  }
})
