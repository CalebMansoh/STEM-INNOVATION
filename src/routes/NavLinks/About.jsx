import React from "react";
import Navbar from "../../compnents/Navbar";
import AboutContent from "../AboutContent/AboutContent";
import AboutGrid from "../AboutContent/AboutGrid";
import Footer from "../../compnents/Footer";
import AboutCotent2 from "../AboutContent/AboutCotent2";

const About = () =>{
  return(
    <>
      <Navbar/>
      <div className="mx-3">
        <div className="text-center md:mt-20 h-96 bg-blue-300 shadow-lg my-2 text-slate-700 rounded-md">
          <h1>FlowBite</h1>
          <div className="md:pt-60 pt-40">
            <h1>WELCOME TO<br className="md:hidden" /> AWASO STEM</h1>
          </div>
        </div>

        <AboutContent/>
        <AboutGrid/>
        <AboutCotent2/>
      </div>
      <Footer/>
    </>
  )
}

export default About