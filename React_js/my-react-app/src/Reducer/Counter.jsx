import React, { useReducer} from 'react'
import Reducer, { xyz } from './Reducer';

function Counter() {
    const [state, dispatch] = useReducer(Reducer, xyz);

    return (
        <div>
            <h1>Counter</h1>
            <h2>{state.count}</h2>
            <h2>State: {state ? "TRUE" : "FALSE"}</h2>
            <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "dec" })}>Dicrement</button>
            <button onClick={() => dispatch({ type: "set" })}>Reset</button>
            <button onClick={()=> dispatch({type: "TOGGLE"})}>Toggle</button>
        </div>
    )
}

export default Counter