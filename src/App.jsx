import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compnents/Navbar'
import Carousel from './compnents/Carousle'
import Content from './compnents/Contents/Content'
// import Footer from './compnents/Footer'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
      AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
      });
      }, []);

  return (
    <>
      <Navbar/>  
      <Carousel/>
      <Content/>/
      {/* <Footer/> */}
      
    </>
  )
}

export default App
