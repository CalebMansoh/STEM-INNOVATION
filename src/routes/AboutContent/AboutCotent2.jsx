import React from 'react'

const AboutCotent2 = () => {
  return (
    <div className=' mt-10'>
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
            To develop and nuture students to aquire 21st century skills <br className='hidden md:visible'/> and competencies as well as values that will enable them to be competitive <br className='hidden md:visible'/> in a world of frequent and unpredictable technological advancement.
          </p>
        </div>
      </div>
      <div className='text-center my-10'>
        <div className='mb-5 border-b-2 dark:border-slate-500 inline-block border-black'>
          <h2>THE SCHOOL CORE VALUES</h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <ol className='grid gap-3 md:flex grid-cols-2 md:gap-6 md:flex-row pb-8'>
            <li>INNOVATION</li>
            <li>LEADERSHIP</li>
            <li >EXCELLENCE</li>
            <li>AMBITION</li>
            <li >DISCIPLINE</li>
          </ol>
        </div>
        
      </div>
      <div className='flex justify-center gap-10 md:flex-row flex-col'>
        <div className='text-center pb-10'>
          <div className='mb-5 border-b-2 dark:border-slate-500 inline-block border-black'>
            <h2>THE SCHOOL MOTTO</h2>
          </div>
          <div>
            <span className='text-xl'>INNOVATION THROUGH CREATIVITY</span>
          </div>
        </div>
        <div className='text-center pb-10'>
          <div className='mb-5 border-b-2 dark:border-slate-500 inline-block border-black'>
            <h2>THE SCHOOL SLOGAN</h2>
          </div>
          <div>
            <span className='text-xl'>ABREMPONG "ILEAD"</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCotent2
