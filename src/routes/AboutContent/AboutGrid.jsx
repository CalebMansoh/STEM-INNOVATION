import React from "react";


const AboutGrid = () => {
  return(
    <>
      <div className="flex md:justify-around flex-col md:flex-row lg:gap-0 my-4 md:text-start bg-slate-200 p-6 shadow-md gap-4 md:gap-8 rounded-md dark:bg-slate-700">
        <div className="md:w-64 rounded-md">
          <div>
            <img src="/AboutImage/Logo.jpg" alt="" className="w-full rounded-md"/>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam repudiandae praesentium tempore ea nobis delectus. Sit excepturi quisquam architecto?
            </p>
          </div>
        </div>
        <div className=" md:w-64">
          <div>
            <img src="/AboutImage/download (3).jpg" alt="" className="w-full rounded-md"/>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam repudiandae praesentium tempore ea nobis delectus. Sit excepturi quisquam architecto?
            </p>
          </div>
        </div>
        <div className=" md:w-64 ">
          <div>
            <img src="/AboutImage/Logo.jpg" alt="" className="w-full rounded-md"/>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam repudiandae praesentium tempore ea nobis delectus. Sit excepturi quisquam architecto?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


export default AboutGrid