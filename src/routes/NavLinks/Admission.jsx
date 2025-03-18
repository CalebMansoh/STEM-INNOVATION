import React  from "react";
import Navbar from "../../compnents/Navbar";
import AdmissionForm from "./AdmissionData/AdmissionForm";
import Footer from "../../compnents/Footer";

const Admission = () => {
  return(
    <>
      <Navbar/>
      <div className="bg-black bg-blend-overlay bg-opacity-35 h-[560px] md:mt-[63px] bg-[url('/AboutImage/Logo.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center  p-6 dark:bg-slate-800 dark:bg-opacity-75 duration-700 ease-linear dark:bg-blend-overlay">
        <div>
          <h1 className="text-center text-slate-100">Welcome to Awaso STEM <span className="italic text-red-300">Admission Form</span></h1>
        </div>
        <div className="text-slate-100 pt-32">
          <p className="text-xl text-center">
            Awaso STEM is very happy that you chose this school for your ward. <br className="hidden md:block"/> Please fill the forms below to adimt your in Awaso STEM SHS thank you !!
          </p>
        </div>
      </div>
      <AdmissionForm/>
      <Footer/>
    </>
  )
}

export default Admission