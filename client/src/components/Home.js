// import React from "react";
import { useEffect } from "react";
import useRotate from "../utils/useRotate"
function Home() {

    const {rotateRing}=useRotate();
    useEffect(()=>{
        rotateRing(0);
        document.getElementById("hero-image").style.opacity="100";
    });


  return (
      
    <div className="inner-ring">
    <div id="hero-image"></div>
    </div>
  );
}

export default Home;
