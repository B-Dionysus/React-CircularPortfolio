// import React from "react";

import { useEffect } from "react";
function Home() {

    useEffect(()=>{
        document.getElementById("hero-image").style.opacity="100";
    });


  return (
    <div id="hero-image"></div>
  );
}

export default Home;
