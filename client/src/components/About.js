// import React from "react";
import useRotate from "../utils/useRotate"
import { useEffect } from "react";
function About(props) {

  const {rotateRing}=useRotate();
  
    useEffect(()=>{
      rotateRing(90);
      document.getElementById("about-text").style.opacity="100";

    });


  return (
    
    <div className="inner-ring">
    <div id="about-text">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Benjamin Dionysus (benjamin@sixbynine.com)</strong></p>
      <p>According to his resume, Benjamin is:</p>
      <p>A hardworking and resourceful Software Engineer with experience in web design, software development, program and project management, technology implementation, software management, and user support. Leverages attention to detail and analytical skills to troubleshoot technology issues and develop effective solutions. A creative and technically skilled producer who delivers high-quality web experiences.</p>
      <div className="contact-info">
      773-209-2241 |
        <a href="https://www.linkedin.com/in/benjamin-dionysus-10a638182/">LinkedIn</a> |
        <a href="https://github.com/B-Dionysus">GitHub</a> | 
        <a href="https://desolate-waters-58175.herokuapp.com/assets/other/dionysusResume2020.5b.pdf">Resume (PDF)</a>
      </div>
    </div>
    </div>
  );
}


export default About;
