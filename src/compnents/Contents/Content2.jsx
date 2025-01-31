import React from "react";


const Content2 = () => {
  return(
    <>
      <div>
        <div className="flex flex-col justify-between gap-8 md:flex-row items-center mx-3 my-3 shadow-xl bg-gray-200 p-6 dark:bg-slate-700 duration-700 ease-linear rounded-md">
          <div className="md:w-1/2 w-full">
            <p className="text-lg text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque voluptas ab atque, quasi cupiditate tempore. Delectus harum facere voluptatem veniam veritatis? Qui, repellat odit ea cum quo enim quidem commodi quibusdam corporis molestias distinctio voluptatum voluptatibus explicabo blanditiis. Saepe ex sit iste repudiandae voluptate, necessitatibus ducimus laudantium quis reiciendis maiores.
            </p>
          </div>
          <div className="md:w-1/2 h-80 w-full bg-gray-800 text-center rounded-md">
            {/* <img src="/Logo/gallery6.jpg" alt="" className=" h-full w-full md:w-full"/> */}
            <h2 className="text-white">FlowBite</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content2