import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Carousel() {
  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: true, // Only once animation
    });
    }, []);
  return(
    <>
      {/* <div className="text-center my-3 md:mt-24 mx-3 shadow-lg rounded-md flex items-center justify-center bg-blue-900" data-asos="flip-up">
        <img src="/Logo/home2.png" alt="" className="w-2/4" />
        <div>
          <h1 className="text-emerald-200">WELCOME TO AWASO STEM</h1>
          <h2 className="text-emerald-300">Innovation Through Creativity</h2>
        </div>
      </div> */}
      <div className="text-center my-3 md:mt-24 mx-3 shadow-lg rounded-md flex items-center justify-center bg-blue-900"
         >
         <img src="/Logo/home2.png" alt="" className="w-2/4"  data-aos="fade-left"/>
        <div data-aos="fade-top">
          <h1 className="text-emerald-200">WELCOME TO AWASO STEM</h1>
          <h2 className="text-emerald-300">Innovation Through Creativity</h2>
        </div>
      </div>
    </>
  )
}

export default Carousel