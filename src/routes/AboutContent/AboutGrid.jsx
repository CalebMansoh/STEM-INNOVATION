import React from "react";


const AboutGrid = () => {
  return(
    <>
      <div className="flex md:justify-around flex-col md:flex-row my-4 md:text-start bg-slate-200 p-6 shadow-md gap-8 rounded-md dark:bg-slate-700 duration-700 ease-linear">
        <div className=" md:w-64 flex flex-col gap-2">
          <div>
            <img src="/AboutImage/Logo.jpg" alt="" className="w-full rounded-3xl"/>
          </div>
          <div>
            <p className="text-xl md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam repudiandae praesentium tempore ea nobis delectus. Sit excepturi quisquam architecto?
            </p>
          </div>
        </div>
        <div className=" md:w-64 flex flex-col gap-2">
          <div>
            <img src="/AboutImage/download (3).jpg" alt="" className="w-full rounded-3xl"/>
          </div>
          <div>
            <p className="text-xl md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam repudiandae praesentium tempore ea nobis delectus. Sit excepturi quisquam architecto?
            </p>
          </div>
        </div>
        <div className=" md:w-64 flex flex-col gap-2">
          <div>
            <img src="/AboutImage/Logo.jpg" alt="" className="w-full rounded-3xl"/>
          </div>
          <div>
            <p className="text-xl md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit magnam repudiandae praesentium tempore ea nobis delectus. Sit excepturi quisquam architecto?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


export default AboutGrid