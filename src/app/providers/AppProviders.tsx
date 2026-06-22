//core
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
//other
import { ErrorProvider } from '../../shared/context';
import { GlobalStyle, theme } from '../styles';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ErrorProvider>{children}</ErrorProvider>
    </LocalizationProvider>
  </ThemeProvider>
);
