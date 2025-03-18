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
      <div className="h-[90vh] bg-[url('/AboutImage/Logo.jpg')] bg-center bg-cover flex  flex-col justify-evenly items-center md:flex-row bg-black bg-blend-overlay bg-opacity-35 dark:bg-opacity-50"  id="front">
        <div className="flex items-center md:flex-row flex-col-reverse py-16 md:gap-52 px-10 md:py-20 gap-10 md:mt-16 mx-3" id="blur-effect">
          <div className="text-center">
            <div className="my-4">
              <h1 className="text-3xl md:text-5xl text-slate-200">Welcome To Awaso Stem</h1>
            </div>
            <div>
              <p className="text-slate-200 text-xl">
                Innovation Through Creativity
              </p>
            </div>
          </div>
          <div>
            <img src="/AboutImage/Logo.jpg" alt="" width='350px' className="rounded-[20px] shadow-md"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel