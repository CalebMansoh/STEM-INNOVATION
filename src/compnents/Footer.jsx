import React from "react";
import FooterGrid from "./FooterInfo/FooterGrid";
import Built from "./FooterInfo/Built";


const Footer = ()=> {
  return(
    <>
      <div className="bg-red-400 text-white p-4 mt-16" id="contact">
        {/* <div className="mx-6 pt-4">
          <img src="/Logo/download.jpg" alt="" className="w-14 rounded-xl"/>
        </div> */}
        <div className="flex flex-col justify-center items-center mb-10">
          <div>
            <h2>More Info</h2>
          </div>
          <div className=" w-48"><hr className="border border-slate-700"/></div>
        </div>
        <FooterGrid/>
        <Built/>
      </div>
    </>
  )
}


export default Footer