// import { Link } from "react-router-dom"
import courses from "../../routes/AboutContent/Data"
import Content2 from "./Content2"
import ContentGrid from "./ContentGrid"




function Content() {
  return(
    <>
      {/* <div className="mx-3 flex flex-col md:flex-row justify-between items-center mt-8 gap-8 bg-slate-200 p-6 shadow-lg dark:bg-slate-700 duration-700 ease-linear rounded-md" data-aos = 'fade-right'>
        <div className="text-start md:w-1/2">
          <p className="text-xl">
            The school comprises of full of a developed V-BLOCK structure. The building contains 13 labs and 11-classrooms.The purpose of the school is to help individual to discover his talent through training, to become a fully professional specialist in his or her carrier.
          </p>
          <button className="mt-7 border border-solid border-black text-center inline-block px-4 md:px-2 py-1 rounded-md text-gray-700 shadow-xl hover:bg-red-400 duration-700 ease-in-out dark:text-slate-300 dark:border-slate-500"><Link to= "about">Read More</Link></button>
        </div>
        <div className="md:w-2/5 md:h-82 w-80 text-center bg-gray-700 shadow-lg rounded-md">
          <img src="/AboutImage/Logo.jpg" className="w-full h-full rounded-md"/>
          <h2 className="text-white">FlowBite</h2>
        </div>
      </div> */}
      
      <div className="flex flex-col justify-center items-center my-10 bg-slate-200 text-black mx-3 rounded-md py-10 dark:bg-slate-700 duration-700 ease-linear dark:text-slate-300" data-aos = 'fade-right'>
        <div className='md:w-[600px] text-center'>
          <div className="my-3">
            <h1 className="text-3xl">What is STEM Education</h1>
          </div>
          <div >
            <p className="font-bold text-[16px]">
            STEM (Science, Technology, Engineering, and Math) fosters innovation, drives economic growth, and develops critical thinking, shaping the future and solving real-world problems.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <Content2/>
        <div className="flex flex-col md:flex-row justify-evenly items-center ">
          {courses.map((cards) =>(
            <ContentGrid key={cards.id} {...cards}/>
          ))}
        </div>
        {/* <ContentGrid/> */}
      </div>
    </>
  )
}

export default Content