import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([])

  function handleChange (event) {
    const newValue = event.target.value
    setInputText(newValue);
    
  }

  function addList (event) {
    setList((prevValue) => {
      console.log(prevValue)
      return [... prevValue, inputText]
    })
    setInputText("");
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
          <li key={index}> {value} </li>
         ))}
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default App
