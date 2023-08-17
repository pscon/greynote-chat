import { useContext, useState } from 'react'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

function App({children}
  ) {

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser, 'currentUser' );
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };



  return (
    <>
     <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
