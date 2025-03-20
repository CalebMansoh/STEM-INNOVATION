import React, { useState } from 'react'
import SubmitButton from './SubmitButton'

const AdmissionForm = () => {
  const [gender, setGender] = useState('')

  const handleGenderChange = (event) =>{
    setGender(event.target.value)
  }
  return (
    <div className='my-20'>
      <div className='mx-3 md:mx-44 p-2 bg-slate-200 rounded-lg shadow-md dark:bg-slate-700 duration-700 ease-linear dark:shadow-slate-600 dark:shadow-md'>
        <fieldset className='py-5 border-t border-black dark:border-slate-400'>
          <legend className='text-center'><h1>Admission Form  </h1></legend>
          <form>
            <div className='flex flex-col w-full justify-between gap-10 ' >
              <input type="text" name="FirstName" id="Fname"  required placeholder='Enter First Name' className='w-full rounded-md text-center dark:bg-transparent dark:border-slate-400 duration-700 ease-linear focus:ring-0'/>
              <input type="text" name="MiddleName" id="Mname" placeholder='Middle Name (Optional*)' className='w-full rounded-md text-center dark:bg-transparent dark:border-slate-400 duration-700 ease-linear focus:ring-0'/>
              <input type="text" name="LastName" id="Lname" required placeholder='Enter Last Name' className='w-full rounded-md text-center dark:bg-transparent dark:border-slate-400 duration-700 ease-linear focus:ring-0'/>
            </div>
            <div className='flex gap-8 py-10'>
              <div className='border border-black w-full rounded-md p-2 bg-white dark:bg-transparent dark:border-slate-400 duration-700 ease-linear'>
                <input type="radio" name="male" value= "male" id="male" checked={gender === 'male'} onChange={handleGenderChange} className='mr-2 focus:ring-0 dark:bg-transparent duration-700 ease-linear'/>
                <label htmlFor="male">
                  Male
                </label>
              </div>
              <div className='border border-black w-full rounded-md p-2 bg-white duration-700 ease-linear dark:bg-transparent dark:border-slate-400'>
                <input type="radio" value= "female" name="female" id="female" checked={gender === 'female'} onChange={handleGenderChange} className='mr-2 dark:bg-transparent ease-linear duration-700 focus:ring-0 '/>
                <label htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className='flex w-full gap-8'>
              <div className='w-full border border-black rounded-md dark:border-slate-400 duration-700 ease-linear'>
                <input type="number" required name='age' id='age' placeholder='Enter Age' className='border-none w-full rounded-md dark:bg-transparent duration-700 ease-linear focus:ring-0'/>
              </div>
              <div className='w-full rounded-md border border-black dark:border-slate-400 duration-700 ease-linear'>
                <input type="number" required name='grade' id='grade' placeholder='Enter Grade' className='border-none w-full rounded-md dark:bg-transparent duration-700 ease-linear focus:ring-0'/>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-8 py-10'>
              <div className='w-full rounded-md'>
                <input type="text" required name="GuardianName" id="GuardianName" placeholder='Guardian or Parent Name' className='w-full rounded-md dark:bg-transparent dark:border-slate-400 duration-700 ease-linear focus:ring-0 text-center'/>
              </div>
              <div className='w-full rounded-md'>
                <input type="tel" required name="GuardianContact" id="GuardianContact" placeholder='Parent or Guardian Contact' className='w-full rounded-md dark:bg-transparent dark:border-slate-400 duration-700 ease-linear focus:ring-0 text-center'/>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-8'>
              <div className='w-full border-black border dark:border-slate-400 rounded-md'>
                <input type="text" required name="Location" id="Location" placeholder='Your Location' className='dark:bg-transparent duration-700 ease-linear border-none w-full rounded-md text-center focus:ring-0'/>
              </div> 
              <div className='border border-black dark:border-slate-400 rounded-md w-full text-center flex  items-center bg-white dark:bg-transparent dark:text-slate-200 text-slate-700'>
                <p className='w-full'>Select Your Suject</p>
                <select name="subject" required id="subject" className='dark:bg-transparent duration-700 ease-linear border-none w-full rounded-md text-center focus:ring-0'>
                  <option value="Engineering" className='dark:text-black duration-700 ease-linear'>Engineering</option>
                  <option value="Biomedical" className='dark:text-black duration-700 ease-linear'>Biomedical</option>
                  <option value="Aviation" className='dark:text-black duration-700 ease-linear'>Aviation</option>
                  <option value="Aviation" className='dark:text-black duration-700 ease-linear'>Robotics</option>
                </select>
              </div>
            </div>
            <div className='w-full pt-10'>
              <textarea name="AddInfo" id="AddInfo" cols="20" rows="8" placeholder='Any additional Information' className='w-full rounded-md focus:ring-0 border border-black dark:border-slate-400 dark:bg-transparent duration-700 ease-linear'></textarea>
            </div>
            <div className='flex gap-8 pt-10'>
              <SubmitButton/>
              <div className='w-full hover:bg-opacity-80 p-2 rounded-md duration-700 ease-linear bg-red-600 text-slate-200'>
                <input type="reset" value="Reset" className='w-full'/>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default AdmissionForm
