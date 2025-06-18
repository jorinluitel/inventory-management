import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
// import App from './App.tsx'
import AppRoute from './AppRoutes.tsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
