import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
// import App from './App.tsx'
import AppRoute from './AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  </StrictMode>,
)
