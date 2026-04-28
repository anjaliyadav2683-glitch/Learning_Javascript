import React, { useEffect, useState } from 'react'

function Useeffecthook() {
  useEffect(() => {
    console.log("Component Mouted");
  },[])
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log("Component Rendered");
  })
  useEffect(() => {
    console.log("Run Only One");
  },[]);
//   useEffect(() => {
//     return () => {
//     console.log("Component Unmounted");
// }},[]);
//   const [count,setCount] = useState(0);
//   useEffect(()=> {
//     document.title = "My App" ;
//   },[]);

  return (
    <>
    <h2>Useeffect-hook</h2>
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>

    <h2>Unmount me</h2>
    <button onClick={() => setCount(count + 1)}>Click</button>

    
    </>
  )
}

export default Useeffecthook