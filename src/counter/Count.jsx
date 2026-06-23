import { useState } from "react";


export default function Count(){
   const [count,setCount]=useState(0);
   function incre(){
    setCount(count=>count+1)
   }
   function decrea(){
    setCount(count=>count>0 ?  count-1: 0)
   }
  return (
    <div>
      <button onClick={incre}>Increase</button>
      <h1>{count}</h1>
      <button onClick={decrea}>Decrease</button>
    </div>
  )
}