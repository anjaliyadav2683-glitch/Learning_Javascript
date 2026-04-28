import React from 'react'

export default function Index() {

  const addItem = () => {
    setItems([...item, input]);
    setInput("");
  };
  return (
    <>
      <div>
        <input type="text"
          name="name"
          placeholder='Enter your Name' />
        
        <button>Add</button>
      </div>
      <button>All</button>
      <button>Complate</button>
      <button>Pending</button>

    </>
  )
}
