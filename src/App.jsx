import { useState } from 'react'
import './App.css'
import ToDoItem from "./Components/ToDoItem"



function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([])

  function handleChange (event) {
    const newValue = event.target.value
    setInputText(newValue);
    
  }

  function addList (event) {
    setList((prevValue) => {
      return [... prevValue, inputText]
    })
    setInputText("");
  }

  function deleteItem (id) {
    setList((prevValue) => 
      prevValue.filter((value,index) => id !== index )
    )
  }


  return (
    <>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
         {list.map((value, index)=> (
          <ToDoItem 
            text={value}
            id={index}
            key={index} 
            toCheck={deleteItem}         
          />


         ))}
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default App
