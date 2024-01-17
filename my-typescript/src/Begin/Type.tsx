
import React, { useEffect, useState } from "react"
import { Data } from "./Data";


export const Type = () => {
  const [click, setClick] = useState(false);

  useEffect(()=>{
    if(click){
      console.log("Clicked");
    }
  },[click])

  const handleClick = () =>{
    setClick(true);
  }

  return (
    <>
    <button className="btn" onClick={handleClick}>Cause Effect</button>
    <Data />
    </>

  )
}
