import React, { useState } from 'react'

function Usecounter(initialvalue = 0) {
    const [count,setcount] = useState(initialvalue);

    const increment = () => setcount(count + 1);
    const decrement = () => setcount(count - 1);
  return {count,increment,decrement};
}

export default Usecounter