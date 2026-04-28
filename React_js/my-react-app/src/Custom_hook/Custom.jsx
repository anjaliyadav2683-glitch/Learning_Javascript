import React from 'react'
import Usecounter from './Usecounter'

function Custom() {
  const {count, increment,decrement} = Usecounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Custom 