import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SnackbarProvider from './React-Context/Snackbar.tsx';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './Providers/ApiProvider.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ApolloProvider>
  </StrictMode>,
)
