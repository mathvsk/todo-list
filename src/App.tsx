import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { Home } from './pages/Home/index.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
