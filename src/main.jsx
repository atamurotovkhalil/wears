import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AuthContextProvider } from './components/PersonalProducts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
)
