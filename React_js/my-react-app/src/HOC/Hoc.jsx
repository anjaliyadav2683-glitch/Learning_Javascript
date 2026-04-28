import React from 'react'
import Anjali from "./Buttontwo"
import Button from './button';

function Hoc() {
  const HellowAnjali = Anjali(Button);
  return (
    <div>
        <h2>HOC</h2>
        <HellowAnjali/>

    </div>
  )
}

export default Hoc