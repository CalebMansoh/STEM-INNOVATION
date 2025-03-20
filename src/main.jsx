import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Admission from './routes/NavLinks/Admission.jsx';
import About from './routes/NavLinks/About.jsx';
import Gallery from './routes/NavLinks/Gallery.jsx';
import Staff from './routes/NavLinks/Staff-Poter.jsx';
import MainStaff from './routes/NavLinks/MainStaff.jsx';
import NonStaff from './routes/NavLinks/NonStaff.jsx';
import Contact from './compnents/Contact.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/admission", element: <Admission/>},
  {path: "/about", element: <About/>},
  {path: "/gallery", element: <Gallery/>},
  {path: "/staff", element: <Staff/>},
  {path: "/MainStaff", element:<MainStaff/>},
  {path: "/NonStaff", element:<NonStaff/>},
  {path: "/Contact", element:<Contact/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
