import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { router } from './router/router.jsx'

AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='' >
 <RouterProvider router={router}>

 </RouterProvider>
    </div>
   
   
  </StrictMode>,
)
