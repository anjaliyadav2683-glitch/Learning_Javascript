import React, { useState } from 'react'
import Task01 from './Task01'
import Task02 from './Task02'

function Lifting() {
    const [index,SetIndex] = useState("");
  return (
    <>
    <h1>Inpute</h1>

    <Task01 name={SetIndex}/>

    <hr />

    <Task02 user={index}/>
    </>
  )
}

export default Lifting