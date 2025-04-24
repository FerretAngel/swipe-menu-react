import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ rollupTypes: true, include: ['./src/components/SwipeMenu'], tsconfigPath: './tsconfig.app.json' })],
  build: {
    outDir: './docs'
  },
})
