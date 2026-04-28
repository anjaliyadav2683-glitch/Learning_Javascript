import React, { useState } from 'react'

function Memo() {
    const [count,setCount] = useState(0);
    const [input,setInput] = useState(0);
    function add (num) {
        console.log("first");
        for (let index = 0; index <= 1000; index++){
            return num * 5;
        } 
         
    }
    add();
    
    
  return (
    <>
    <button onClick={(e)=>setCount(count + 1)}>Increment</button>
    <p>{count}</p>
    <input type="number" onChange={(e)=>setInput(e.target.value)} />
    {/* <p>{data}</p> */}                               
    
    </>
  )
}

export default Memo