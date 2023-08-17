import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
)
