import React, { useState } from 'react'

function Eventhandling() {
    const ShowAlert = () => {
        alert("Button Clicked!");
    }

    const handleClick = () => {
        console.log("Button Clicked");

    }
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);

    const [count,setCount] = useState(0);

    const handleclick =(label) => {
        alert(label);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted")
    }
    const [form, setForm] = useState({
        name:"",
        Email:""
    });
    const handlechange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        }); 
    }
    const [subscribed,setSubscribed] = useState(false);

    return (
        <>
            <button onClick={ShowAlert}>Click me</button>
            <hr />


            <button onClick={handleClick}>Click</button>
            <hr />

            <input type="text" onChange={handleChange} />
            <hr />
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <hr />
            <div>
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"} Text
                </button>

                {show && <p>Hello React</p>}

            </div>
            <hr />
            <div>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>

            </div>
            <hr />
            <div>
                <button onClick={() => handleclick("Anjali")}>Anjali</button>
                <button onClick={() => handleclick("Raj")}>Raj</button>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name' />
                <button type='submit'>Submit</button>
            </form>
            <hr />

            <div>
                <input name="name" onChange={handlechange} placeholder='Name' />
                <input name="email" onChange={handlechange} placeholder='Email' />

            </div>
            <hr />
            <div>
                <input type="checkbox"
                onChange={() => setSubscribed(!subscribed)} />
                <p>{subscribed ? "subscribed" : "Not subscribed"}</p>
            </div>
            <hr />

            














        </>

    )
}

export default Eventhandling