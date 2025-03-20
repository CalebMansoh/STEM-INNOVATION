import React from "react";


const Content2 = () => {
  return(
    <>
      <div>
        <div className="flex justify-center mx-3 shadow-md bg-gray-200 dark:bg-slate-700 duration-700 ease-linear rounded-md py-10 md:py-20 items-center flex-col" >
          <div className="">
            <div className="text-center border dark:border-slate-700 duration-700 ease-linear border-b-black dark:border-b-slate-300">
              <h2 className=" py-2 text-2xl font-bold" data-aos = 'fade-right'>What We Offer</h2>
            </div>
            {/* <hr  className="mb-6 border-solid border-black w-full dark:border-slate-300 duration-700 ease-linear" data-aos = 'fade-bottom'/> */}
          </div>
          {/* <div className="md:w-3/4 w-full">
            <p className="text-lg text-center"> 
              Awaso STEM offer all the science programs which is; <span className="text-xl font-semibold">"Chemistry, Biology, Physics, Elective Mathematics or Additional Mathematics"</span> with the addition of <span className="text-xl font-semibold">Engineering, Biomedicals, Aviation and Agriculture Science, Robotics, Computer Science and Geography</span>
            </p>
          </div> */}
          {/* <div className="md:w-1/2 h-64 w-full bg-gray-800 text-center rounded-md">
            <h2 className="text-white">FlowBite</h2>
          </div> */}
          <div className="md:w-3/4 w-full text-center my-10" data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
            <p className="text-lg">
              STEM offers a wide range of courses, including science disciplines like biology and chemistry, technology fields like computer science and robotics, engineering, and mathematical studies like statistics. STEM education is designed to help students develop the skills they need to be successful in their careers and in life. 
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Content2