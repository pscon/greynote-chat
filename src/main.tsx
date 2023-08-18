import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './contexts/AuthContext.tsx'
import { ChatContextProvider } from './contexts/ChatContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChatContextProvider>
    <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider cssVarsRoot={undefined}>
    <App children={undefined} />
    </ChakraProvider>
    </BrowserRouter>
    </AuthContextProvider>
    </ChatContextProvider>
  </React.StrictMode>,
)
