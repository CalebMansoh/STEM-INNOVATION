import React from "react";
import Navbar from "../../compnents/Navbar";
import Footer from "../../compnents/Footer";
import StaffContent from "./StaffData/StaffContent";


const Staff = () => {
  return(
    <>
      <Navbar/>
      <div>
        <div className={`text-center bg-[url('/AboutImage/Logo.jpg')] bg-opacity-60 bg-slate-900 duration-700 ease-linear bg-blend-overlay dark:bg-opacity-65 dark:bg-black dark:bg-blend-overlay bg-cover bg-center h-96 md:mt-16 flex flex-col justify-end items-center text-slate-200 mb-10 px-3`}>
          <h1 className="mb-8 text-3xl md:text-4xl">Welcome to AWASO <span className="italic text-red-300">STEM PORTAL</span></h1>
          <p className="text-center md:w-1/2 mb-10 md:mb-28 text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni consectetur animi illo minima optio possimus maiores excepturi, repudiandae necessitatibus! Facilis?
          </p>
        </div>
        <StaffContent/>
        <div className="md:mx-6 mx-3 border-l-8 border-red-700 bg-yellow-400 p-4 my-10 md:w-1/2 rounded-md shadow-md text-slate-600 cursor-pointer">
          <p className="text-lg"><span className="md:text-xl">NOTE:</span> This section is for only AWASO STEM STAFF</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Staff