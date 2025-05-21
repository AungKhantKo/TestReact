import React, { useEffect } from "react";

const All = () => {
  useEffect(()=>{
    const btn = document.getElementById("btn")
    btn.addEventListener('click', _ => {
      console.log('yo')
    })
  },[])
  return <button id="btn">On click</button>
}

export default All;