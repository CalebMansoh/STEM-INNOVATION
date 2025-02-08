import React, { useState } from "react";
import { IoEye, IoEyeOff, IoLanguage, IoLocation, IoLockClosedOutline, IoLockOpenOutline, IoLogIn } from "react-icons/io5";
import { AiFillMoon, AiFillSun } from 'react-icons/ai';


const StaffContent = () =>{
  const [password, setPassword] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const correctPass = "Teaching"
  const correctPass2 = "Staff"
  const redirectUrl = './MainStaff'
  const redirectUrl2 = '././NonStaff'
  const [showPass, setShowPass] = useState(false)


  const handelSubmit = (event)=>{
    event.preventDefault();
    if(password === correctPass) {
      setIsSubmited(true);
      console.log("Form Submitted");
      window.location.href = redirectUrl
    }else if(password === correctPass2){
      setIsSubmited(true)
      window.location.href = redirectUrl2
    }else{
      document.getElementById("error").innerText = "Use Specified Password"
    }
    
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  


  return(
    <> 
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-32 mx-3 md:mx-6 my-10">
        <div className="text-start text-base text-slate-700 md:w-1/2 dark:text-slate-300 duration-700 ease-linear">
          <p className="text-lg md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam facere velit voluptatum similique quos cupiditate explicabo recusandae libero earum, iure necessitatibus sequi quaerat quod obcaecati modi dolor quae sunt? Rerum repellat culpa itaque exercitationem, voluptate tenetur nemo temporibus quas quisquam? Soluta neque beatae repellat illo illum dolore ipsa consequatur enim quasi earum laboriosam voluptates dicta, esse commodi asperiores nulla dolorum.
          </p>
        </div>
        <div className="border border-solid border-slate-600 pt-5 pb-5 px-3 rounded-md shadow-md w-full md:w-1/2 bg-slate-300 dark:bg-slate-500 dark:border-slate-100 duration-700 ease-linear">
          <form onSubmit={handelSubmit}>
            <div className="text-center text-slate-700">
              <h2 className="py-4 dark:text-slate-300 duration-700 ease-linear">Login To Staff Portal</h2> 
            </div>
            <div className="flex flex-col gap-8">
              <input type="text" placeholder="Enter Staff Name" id="UserName" name="UserName" className="rounded-md border-none bg-slate-200 dark:bg-slate-600 duration-700 ease-linear focus:ring-0" required/>
              <div className="flex items-center  rounded-md">
                <input type={showPass?'text':'password'} value={password}name="pass" id="pass" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}  className="rounded-md w-full border-none bg-slate-200 dark:bg-slate-600 duration-700 ease-linear focus:ring-0" required/>
                <div className="-ml-5">
                  <button type="button" onClick={handleShowPass} className="hover:text-black hover:border-none dark:hover:text-slate-300">
                    {showPass?(<IoEye/>):(<IoEyeOff/>)}
                  </button>
                  
                  
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <button className="mt-6 mb-2 p-2 text-center bg-slate-600 text-slate-200 text-xl rounded-md hover:bg-green-500 hover:text-slate-50 hover:border-none duration-700 ease-in-out w-full" id="submit">
                Login
              </button>
            </div>
            {isSubmited && (
              <p className="text-green-500 mt-2 flex flex-row items-center gap-2 font-semibold dark:text-green-400">Form Submitted <IoLockOpenOutline/></p>
            )}
            {!isSubmited && (
              <p className="font-semibold text-red-700 dark:text-red-500" id="error"></p>
            )}
            
          </form>
        </div>
      </div>
    </>
  )
}

export default StaffContent