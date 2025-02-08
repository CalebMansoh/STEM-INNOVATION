import React from 'react'

const AboutCotent2 = () => {
  return (
    <div className='bg-slate-200 rounded-md shadow-md dark:bg-slate-700 duration-700 ease-linear mt-10'>
      <div className='text-center pt-8'>
        <div className='mb-5 border-b-2 dark:border-slate-500 inline-block border-black'>
          <h2>THE SCHOOL'S VISSION</h2>
        </div>
        <div>
          <p className='text-xl'>
            Our vision is to be a point of reference of STEM SCHOOLS <br className='hidden md:block'/> in stems education in Ghana and beyond.
          </p>
        </div>
      </div>
      <div className='text-center my-10'>
        <div className='mb-5 border-b-2 dark:border-slate-500 inline-block border-black'>
          <h2>THE SCHOOL'S MISSION</h2>
        </div>
        <div>
          <p className='text-xl'>
            Our mission is to nature students to aquire 21st century skills
          </p>
        </div>
      </div>
      <div className='text-center my-10'>
        <div className='mb-5 border-b-2 dark:border-slate-500 inline-block border-black'>
          <h2>THE SCHOOL CORE VALUES</h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <ol className='flex gap-3 md:gap-6 flex-col md:flex-row pb-8'>
            <li>INNOVATION</li>
            <li>LEADERSHIP</li>
            <li >EXCELLENT</li>
            <li>AMBITION</li>
            <li>DISCIPLANE</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AboutCotent2
