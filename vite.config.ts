import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  
  plugins: [react(),

  linaria({
    sourceMap: process.env.NODE_ENV !== 'production',
  }),
  css({
    output: 'styles.css',
  }),
  ]
})
