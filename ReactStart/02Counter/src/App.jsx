import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);
  const increment = ()=>{
    if(counter>=20){
      return;
    }
    setCounter(counter+1);
  }
  const decrement = ()=>{
    if(counter<=0){
      return;
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Count = {counter}</h1>
      <button onClick={increment}>Increment Counter</button>
      <br />
      <button onClick={decrement}>decrement Counter</button>
    </>
  )
}

export default App
