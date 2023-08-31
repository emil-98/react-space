import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import express from './express-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express("src/server")], /* Added express("src/server") to help work with express-plugin.js */
})
