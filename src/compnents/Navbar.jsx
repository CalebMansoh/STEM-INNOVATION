import {Link} from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import {MdDarkMode} from "react-icons/md"
import {CiLight} from "react-icons/ci"
import ThemeToggle from "./ThemeChange";


function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleThemeChange = () =>{
    isDarkTheme(!isDarkTheme)
  }
  return(
    <>
      
      <div className="bg-red-400 flex justify-between items-center shadow-lg md:fixed py-2 px-3 left-0 right-0 top-0 z-10 text-lg">
        <Link to= "/" className="flex items-center gap-2">
          <img src="/Logo/download.jpg" alt="" className="w-12 rounded-md"/>
          <h2 className="text-slate-700 hidden md:block">AWASO STEM</h2>
          <h2 className="text-slate-700 md:hidden">AWASO</h2>
        </Link>
        <div className="hidden gap-8 text-slate-600 cursor-pointer px-3 md:flex">
          <Link to="/" className="hover:text-slate-300 duration-500 ease-in-out hover:scale-100 hover:-translate-x-1">Home</Link>
          <Link to="/admission" className="hover:text-slate-300 duration-500 ease-in-out hover:scale-100 hover:-translate-x-1">Admission</Link>
          <Link to="/about" className="hover:text-slate-300 duration-500 ease-in-out hover:scale-100 hover:-translate-x-1">About</Link>
          <Link to= "/gallery" className="hover:text-slate-300 duration-500 ease-in-out hover:scale-100 hover:-translate-x-1">Gallery</Link>
          <Link to = "/staff" className="hover:text-slate-300 duration-500 ease-in-out hover:scale-100 hover:-translate-x-1 ">Staff Portal</Link>
          <ThemeToggle/>
        </div>  
        <div className="md:hidden flex gap-5 items-center">
          
          {
            !open?
            (
              <IoMdMenu className="text-3xl text-slate-600" onClick={()=>{
                setOpen(true)
              }}/>
            ):
            (
              <IoCloseSharp className="text-3xl text-slate-600" onClick={()=>{
                setOpen(false)
              }}/>
            )
          }
          <div>
            <ThemeToggle/>
          </div>
          
        </div>
      </div>
      
      {open && (
        <div className="w-full flex flex-col items-end px-3 gap-4 bg-red-400 text-slate-600 md:hidden pb-3">
          <Link to="/" className="hover:text-slate-300 duration-200 ease-linear">Home</Link>
          <Link to="/admission" className="hover:text-slate-300 duration-200 ease-linear">Admission</Link>
          <Link to="/about" className="hover:text-slate-300 duration-200 ease-linear">About</Link>
          <Link to= "/gallery" className="hover:text-slate-300 duration-200 ease-linear">Gallery</Link>
          <Link to = "/staff" className="hover:text-slate-300 duration-200 ease-linear">Staff Portal</Link>
          
        </div>
      )}
      
    </>
  )
}

export default Navbar