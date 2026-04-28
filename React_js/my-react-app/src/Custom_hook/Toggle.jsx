import React from 'react'
import Usetoggle from './Usetoggle'

function Toggle() {
    const [toggle,item]=Usetoggle(true)
  return (
    <>
    <button onClick={item}>Toggle</button>
    <button onClick={()=>item(true)}>Show</button>
    <button onClick={()=>item(false)}>Hide</button>
    {
        toggle?<h1>Welcome</h1> : null

    }
    </>
  )
}

export default Toggle