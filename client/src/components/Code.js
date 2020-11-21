// import React from "react";
import useRotate from "../utils/useRotate"
import { useEffect } from "react";
function Code(props) {

  const {rotateRing}=useRotate();
  
    useEffect(()=>{
      rotateRing(270);
      document.getElementById("code-header").style.opacity="100";
      document.getElementById("code-text").style.opacity="100";
    });
  return (
    <>
    <div className="inner-ring">
      <div id="code-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia numquam, quas excepturi dicta corporis omnis iste atque voluptatem accusantium itaque quis</div>
    </div>    
    <div id="code-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia numquam, quas excepturi dicta corporis omnis iste atque voluptatem accusantium itaque quis in, beatae recusandae cum explicabo consectetur. Nisi, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia numquam, quas excepturi dicta corporis omnis iste atque voluptatem accusantium itaque quis in, beatae recusandae cum explicabo consectetur. Nisi, consectetur.
    </div>
    </>
  );
}


export default Code;
