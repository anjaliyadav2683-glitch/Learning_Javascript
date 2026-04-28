import React, { useState } from 'react'

function Form_2() {
    const [formdata,setFormdata] = useState({
       name : "" ,
       email : "",
       password:""
    })
    const [errors,setErrors] = useState({});

    const handlechange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
        
    };
  return (
    <>
    <div>
        <form action="#">
            <div>
                <input type="text"
                name="name"
                placeholder='Enter your Name'
                value={formdata.name} 
                onChange={handlechange}/>
            </div>
            <div>
                <input type='email'
                name="email"
                placeholder='Enter your email'
                value={formdata.email}
                onChange={handlechange} />
            </div>
            <div>
                <input type='password'
                name="password"
                placeholder='Enter your Password'
                value={formdata.password}
                onChange={handlechange} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>




        </form>
    </div>
    
    
    </>
  )
}

export default Form_2