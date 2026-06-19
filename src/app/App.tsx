import type React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { CalendarPage } from '../pages/CalendarPage'
import { HomePage } from '../pages/HomePage'
import { AppLayout } from '../shared/components/AppLayout'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

const App: React.FC = () => (
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

export default App
