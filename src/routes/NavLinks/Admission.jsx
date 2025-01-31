import React  from "react";
import Navbar from "../../compnents/Navbar";
import AdmissionForm from "./AdmissionData/AdmissionForm";

const Admission = () => {
  return(
    <>
      <Navbar/>
      <div className="md:mt-16 bg-black bg-blend-overlay bg-opacity-35 h-screen md:h-96 bg-[url('/AboutImage/Logo.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center md:justify-end p-6">
        <div>
          <h1 className="text-center text-slate-100">Welcome to Awaso STEM <span className="italic text-red-300">Admission Form</span></h1>
        </div>
        <div className="text-slate-100 pt-32">
          <p className="text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden md:block"/> Nulla pariatur suscipit explicabo quasi inventore, dolor quo dignissimos? Culpa, debitis aliquam?
          </p>
        </div>
      </div>
      <AdmissionForm/>
    </>
  )
}

export default Admission