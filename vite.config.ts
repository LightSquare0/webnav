import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup';
import mkcert from 'vite-plugin-mkcert'
import { splitVendorChunkPlugin } from 'vite'

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    https: true
  },
  
  plugins: [react(),

  linaria({
    sourceMap: process.env.NODE_ENV !== 'production',
    
  }),
  splitVendorChunkPlugin(),
  mkcert()
  // css({
  //   output: 'styles.css',
  // }),
  ]
})