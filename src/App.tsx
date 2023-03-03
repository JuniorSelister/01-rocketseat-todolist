import { ThemeProvider } from 'styled-components'
import { Body } from './components/Body'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Body />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
