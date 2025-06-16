import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { ThemeProvider } from './theme/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
)
