import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([])

  function handleChange (event) {
    const newItem = event.target.value
    setItem(newItem);
    
  }

  function addList (event) {
    const newItem = item
    setList((prevValue) => {
      console.log(prevValue)
      return [... prevValue, newItem]
    })
  }


  return (
    <>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
         {list.map((value, index)=> (
          <li key={index}> {value} </li>
         ))}
            
         
          
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default App
