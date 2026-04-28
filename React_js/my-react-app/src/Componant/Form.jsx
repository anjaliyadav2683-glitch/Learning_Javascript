import React, { useState } from 'react'

function Form() {
    const [text, setText] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: ""
    })
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }
    const [show, setShow] = useState("");
    const [Name, setname] = useState("");
    const [error, setError] = useState("");

    const handleSubmite = (e) => {
        e.preventDefault();

        if (!name) {
            setError("Name is required");
        } else {
            setError("");
            alert("Submitted");
        }
    };
    const [Form, setform] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };
    const [agree, setAgree] = useState(false);
    const [country, setCountry] = useState("");
    const [Text, settext] = useState("");
    return (
        <>
            <div>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <p>{text}</p>
            </div>
            <hr />
            <div>
                <input placeholder='name'
                    value={form.name}
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    } />
                <input placeholder='email'
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    } />
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button type='submit'>submit</button>
            </form>
            <hr />

            <form onSubmit={handlesubmit}>
                <button type='submit'>Submit</button>
            </form>
            <hr />
            <div>
                <input type={show ? "text" : "password"}
                    placeholder='Password' />
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"}
                </button>
            </div>
            <hr />
            <form onSubmit={handleSubmite}>
                <input
                    value={Name}
                    onChange={(e) => setname(e.target.value)}
                />

                <p>{error}</p>

                <button type="submit">Submit</button>
            </form>
            <hr />
            <div>
                <input name="name" onChange={handleChange} />
                <input name="email" onChange={handleChange} />

                <p>{Form.name}</p>
                <p>{Form.email}</p>
            </div>
            <hr />
            <div>
                <input
                    type="checkbox"
                    onChange={(e) => setAgree(e.target.checked)}
                />

                <button disabled={!agree}>
                    Submit
                </button>
            </div>
            <hr />

            <div>
                <select onChange={(e) => setCountry(e.target.value)}>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                </select>

                <p>{country}</p>
            </div>
            <hr />
            <div>
                <textarea
                    onChange={(e) => setText(e.target.value)}
                />

                <p>Characters: {text.length}</p>
            </div>
        </>
    )
}
export default Form