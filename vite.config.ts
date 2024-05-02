import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // オートロード(ポーリング有効)
  server: {
    watch: {
      usePolling: true
    }
  }

})
