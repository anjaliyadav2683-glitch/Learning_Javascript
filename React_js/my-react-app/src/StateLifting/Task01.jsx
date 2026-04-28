import React, { useState } from 'react'

function Task01(props) {
    
  return (
    <>
    <div>Task01</div>
    <input type="text" 
    placeholder='Enter your name'
    onChange={(e)=>props.name(e.target.value)}/>
    
    </>
  )
}

export default Task01