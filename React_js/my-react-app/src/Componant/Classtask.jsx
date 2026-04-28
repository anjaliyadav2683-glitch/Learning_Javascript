import React, { useState } from 'react'

function Classtask() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  const addItem = () => {
    if (input === "")return;
    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };
  function updatlist() {
    const updated = input.map((data) =>
      data.id === editItem ? {...data,text:item} : data,
    );
    setInput(updated);
    setEditIndex(null);
    setItems("");
    }



  return (
    <>
    <div style={{ textAlign: "center", marginTop: "40px" }}>
    

      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {editIndex === null ? (
        <button onClick={addItem}>Add</button>
      ) : (
        // <button onClick= {addItem}>Add</button>
        <>
        <button onClick={updatlist}>update</button>
        <button onClick={updatlist}>Cancel</button>
        </>
      )}
       <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>





    </>

  )

}


export default Classtask