import React, { useState } from 'react'

function Usetoggle(defaultVal) {
    const [toggle,setToggle] = useState(defaultVal);
    function item (newval) {
        if(typeof newval != 'boolean'){
            console.log("if");
            setToggle(!toggle);
            
        } else {
            console.log("else");
            setToggle(newval);
        }
    }
  return [toggle,item];
}

export default Usetoggle