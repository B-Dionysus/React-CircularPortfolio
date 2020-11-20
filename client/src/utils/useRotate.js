import { useState } from "react";

const useRotate = () => {
  // useState using statusState to represent state, and setStatusState to set that specific state
  const [rotateState, setRotate] = useState(0);

  // returning the state and the status object which will be used the capture the value from the form.
  return {
    rotateState,
    rotateRing:(deg)=>{
        document.getElementById("main-ring").style.transform=`rotate(${deg}deg)`;
    }
  };
};
export default useRotate;
