import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(10)

  //let counter  = 5

  const addValue = () => {
    //console.log("clicked",counter);
    //counter++
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter  - 1)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
