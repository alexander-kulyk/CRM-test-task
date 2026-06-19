import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { AppLayout } from '../shared/components/AppLayout'
import { CalendarPage } from '../pages/CalendarPage'
import { HomePage } from '../pages/HomePage'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
