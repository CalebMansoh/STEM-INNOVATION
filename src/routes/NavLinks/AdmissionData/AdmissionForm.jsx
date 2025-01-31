import React, { useState } from 'react'
import { IoFemale, IoMale } from 'react-icons/io5'

const AdmissionForm = () => {
  const [gender, setGender] = useState('')

  const handleGenderChange = (event) =>{
    setGender(event.target.value)
  }
  return (
    <div className='my-10'>
      <div className='mx-3 md:mx-60 p-2 bg-slate-200 rounded-lg shadow-md dark:bg-slate-700 duration-700 ease-linear'>
        <fieldset className='py-5 border-t border-black'>
          <legend className='text-center'><h1>Admission Form  </h1></legend>
          <form>
            <div className='flex flex-col w-full justify-between gap-10 ' >
              <input type="text" name="FirstName" id="Fname"  required placeholder='Enter First Name' className='w-full rounded-md text-center dark:bg-slate-400 duration-700 ease-linear'/>
              <input type="text" name="MiddleName" id="Mname" placeholder='Middle Name (Optional*)' className='w-full rounded-md text-center dark:bg-slate-400 duration-700 ease-linear'/>
              <input type="text" name="LastName" id="Lname" required placeholder='Enter Last Name' className='w-full rounded-md text-center dark:bg-slate-400 duration-700 ease-linear'/>
            </div>
            <div className='flex gap-8 py-10'>
              <div className='border border-black w-full rounded-md p-2 bg-white dark:bg-slate-400  duration-700 ease-linear'>
                <input type="radio" name="male" value= "male" id="male" checked={gender === 'male'} onChange={handleGenderChange} className='mr-2 focus:ring-blue-500 dark:bg-slate-400'/>
                <label htmlFor="male">
                  Male
                </label>
              </div>
              <div className='border border-black w-full rounded-md p-2 bg-white dark:bg-slate-400 duration-700 ease-linear'>
                <input type="radio" value= "female" name="female" id="female" checked={gender === 'female'} onChange={handleGenderChange} className='mr-2 dark:bg-slate-400'/>
                <label htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className='flex w-full gap-8'>
              <div className='w-full border border-black rounded-md dark:border-slate-400 duration-700 ease-linear'>
                <input type="number" name='age' id='age' placeholder='Enter Age' className='border-none w-full rounded-md dark:bg-slate-400'/>
              </div>
              <div className='w-full rounded-md border border-black dark:border-slate-400 duration-700 ease-linear'>
                <input type="number" name='grade' id='grade' placeholder='Enter Grade' className='border-none w-full rounded-md dark:bg-slate-400'/>
              </div>
            </div>
            <div className='flex justify-center my-10'>
              <h1>In Progress...</h1>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default AdmissionForm
