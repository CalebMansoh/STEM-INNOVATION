import React from "react";


const Footer = ()=> {
  return(
    <>
      <div className="mt-10 md:mt-20 bg-red-400" id="contact">
        <div className="grid grid-cols-2 px-4 md:px-0 md:flex md:flex-row md:justify-around items-center">
          <div>
            <h2>Contacts</h2>
          </div>
          <div>
            <h2>Acounts</h2>
          </div>
          <div>
            <h2>Links</h2>
          </div>
        </div>
      </div>
    </>
  )
}


export default Footer