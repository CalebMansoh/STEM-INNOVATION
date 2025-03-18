import React from "react";


const AboutContent = () => {
  return(
    <>
      <div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center my-10 p-6 bg-slate-200 shadow-md rounded-md dark:bg-slate-700 gap-16 duration-700 ease-linear">
          <div className="md:w-1/2 text-start">
            <p className="text-lg">
              <span id="aboutSpan">AWASO STEM</span> institution was established in 2021 with a maximum of 50 students, and located at AWASO, in BIBIANI ANHWIASO BEKWAI district. The school is held by <span id="aboutSpan">MR. JOSEPH ADJABENG</span> and his two deputies <span id="aboutSpan"> MR. GABRIEL ATTAH</span> and <span id="aboutSpan">MR. ISHMAEL NKRUMAH</span>. The school is a fully modernized institution which comprises of 21st century materials use for learning and teaching. The school had it first WACCE on 2024-2025 academic year.
            </p>
          </div>
          <div className="md:w-1/2 w-full text-center bg-orange-300 h-80 rounded-md">
            <h2>FlowBite</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent