// import React from "react";

import { useEffect } from "react";
function About() {

    useEffect(()=>{
        document.getElementById("about-text").style.opacity="100";
    });


  return (
    <div id="about-text">

      <p>
        According to his resume, Benjamin is:
      </p>

<p>
  A hardworking and resourceful Software Engineer with experience in web design, software development, program and project management, technology implementation, software management, and user support. Leverages attention to detail and analytical skills to troubleshoot technology issues and develop effective solutions. A creative and technically skilled producer who delivers high-quality web experiences.
</p>

    </div>
  );
}


export default About;
