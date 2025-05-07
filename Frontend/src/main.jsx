import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import {Router} from './router/App.router.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Router}/>
    </AuthProvider>
  </StrictMode>,
)
