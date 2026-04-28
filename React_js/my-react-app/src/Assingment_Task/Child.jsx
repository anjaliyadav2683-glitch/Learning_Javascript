import React, { forwardRef, useImperativeHandle } from 'react'

function Child(props,ref) {
  useImperativeHandle(ref,()=>{
    return{
      Task
    }
  })
  const Task = ()=>{
    console.log("this is my first fill");
    
  }
  return (
    <div>
      <h1>Child</h1>
    </div>
  )
}

export default forwardRef (Child);