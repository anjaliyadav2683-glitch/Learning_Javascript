import React from 'react'
export const xyz = {count:0};

function Reducer(state, action){
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    case "set":
     return xyz; 
    case "TOGGLE":
      return !state; 
    default:
      return state;
  }
};
  

export default Reducer