import React, { useState } from 'react'

function State() {
  // const fruits = ["Apple","Banana","Mango","Orange","Chiku"]
  // const users = [
  //   {id:1, name:"Anjali"},
  //   {id:2, name:"Raj"},
  //   {id:3, name:"Amit"}
  // ];
  // const products = [
  //   { id: 1, name: "Laptop", price: "50000" },
  //   { id: 2, name: "Mobile", price: "25000" },
  //   { id: 3, name: "game", price: "15000" }];
  // const tasks = [
  //   {id:1,text:"Learn React",done:true},
  //   {id:2,text:"Practice JS",done:false}
  // ];


  // const [items] = useState(["Apple","Banana","Mango"]);
  // const [items, setItems] = useState([]);
  // const [input, setInput] = useState("");


  // const addItem = () => {
  //   setItems([...items, input]);
  //   setInput("");
  // };


  // const [items, setItems] = useState(["Apple", "Banana", "Mango"]);
  // const remove = index => {
  //   setItems(items.filter((_, i) => i !== index));
  // };


  // const [items, setItems] = useState(["Anjali", "Raj"]);
  // const editItem = index => {
  //   const newText = prompt("Edit item:");
  //   if (!newText) return;

  //   const updated = [...items];
  //   updated[index] = newText;
  //   setItems(updated);
  // };


  // const [selected, setSelected] = useState(null);
  // const items = ["Apple", "Banana", "Mango"];


  return (

    <>
    10. {/* <ul>
      {items.map((item, i) => (
        <li
          key={i}
          onClick={() => setSelected(i)}
          style={{
            background: selected === i ? "red" : "white",
            cursor: "pointer"
          }}
        >
          {item}
        </li>
      ))}
    </ul> */}
     {/* 9. <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => editItem(i)}>Edit</button>
          </li>
        ))}
      </ul> */}


      {/* <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item}
          <button onClick={() => remove(i)}>Delete</button>
        </li>
      ))}
    </ul> */}



      7. {/* <div>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={addItem}>Add</button>

          <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div> */}


      6.{/* <ul>
  {items.map((item,i)=> <li key={i}>{item}</li> )}
</ul> */}




      5. {/* <ul>
      {tasks.map(task =>(
        <li key={task.id}>
          {task.text}
          {task.done && <span style={{color:"green",marginLeft:8}}>Done</span>}
        </li>
      ))}

    </ul> */}

      4. {/* {products.map((p) => (
        // <div key={p.id} style={{ border: "1px solid", padding: "10", margin: "5" }}>
          <>
          <div style={{ border: "1px solid", padding: "10", margin: "5" }}>

          <h3>{p.name}</h3>
          <p>{p.price}</p>
          </div>
          </>
      ))} */}






    </>
    // <ul>
    //   {fruits.map(fruit => (
    //     <li>{fruit}</li>

    //   )) }
    // </ul>

    // <ul>
    //   {fruits.map((fruit,index) =>(
    //     <li key={index}>{fruit}</li>
    //   ))}
    // </ul>

    // <ul>
    //   {users.map(user => (
    //     <li key={user.id}>{user.name}</li>
    //   ))}
    // </ul>






  );
}




export default State