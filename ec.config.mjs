import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
  // You can set configuration options here
  themes: ['github-dark'],
  styleOverrides: {
    borderRadius: '0.5rem',
    frames: {
        terminalBackground: '#0a0a0a',
        terminalTitlebarBackground: '#0a0a0a',
        shadowColor: '#0a0a0a',
        editorActiveTabBackground: '#0a0a0a',
        editorTabBarBackground: '#0a0a0a',
        editorActiveTabIndicatorTopColor: '#8b5cf6',
        editorBackground: '#0a0a0a',
    },
    codeBackground: '#0a0a0a',
  },
})