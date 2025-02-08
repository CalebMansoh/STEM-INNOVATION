import { Link } from "react-router-dom"
import Content2 from "./Content2"
import { IoSettings } from "react-icons/io5"




function Content() {
  return(
    <>
      <div className="mx-3 flex flex-col md:flex-row justify-between items-center mt-8 gap-8 bg-slate-200 p-6 shadow-lg dark:bg-slate-700 duration-700 ease-linear rounded-md">
        <div className="text-start md:w-1/2">
          <p className="text-xl">
            The school comprises of full of a developed V-BLOCK structure. The building contains 13 labs and 11-classrooms.The purpose of the school is to help individual to discover his talent through training, to become a fully professional specialist in his or her carrier.
          </p>
          <button className="mt-7 border border-solid border-black text-center inline-block px-4 md:px-2 py-1 rounded-md text-gray-700 shadow-xl hover:bg-red-400 duration-700 ease-in-out dark:text-slate-300 dark:border-slate-500"><Link to= "about">Read More</Link></button>
        </div>
        <div className="md:w-1/2 md:h-82 w-full text-center bg-gray-700 shadow-lg rounded-md">
          <img src="/ContentImage/download (3).jpg" className="w-full h-full rounded-md"/>
          {/* <h2 className="text-white">FlowBite</h2> */}
        </div>
      </div>
      
      <div className="text-center mt-5">
        <h2 className="mt-14 py-1 text-2xl font-bold">What We Offer</h2>
      </div>
      <div className="flex flex-row justify-center">
      <hr  className="mb-6 border-solid border-black w-1/2 dark:border-slate-300 duration-700 ease-linear"/>
      </div>
      <div>
        <Content2/>
      </div>
    </>
  )
}

export default Content