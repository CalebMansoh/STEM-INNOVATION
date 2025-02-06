import React from 'react'
import Navbar from '../../compnents/Navbar'

const NonStaff = () => {
  return (
    <>
      <Navbar/>
      <div className='md:mt-20 md:mx-6 mx-3 rounded-md dark:shadow-slate-600 dark:shadow-md shadow-md duration-700 ease-linear flex flex-col items-center justify-center text-center bg-teal-400 h-96'>
        <h2>Non-Teaching Staff</h2>
      </div>
      
    </>
  )
}

export default NonStaff
