import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/


export default defineConfig({
  test:
  {
    globals:true,
    environment:'jsdom',
    coverage:{
      reporter:['text','lcov'],
      exclude:['*.{test,spec,config}.*']
    }
    
  },
  plugins: [react()],
  server:{
    host:true,
    port:3000
  },
})
