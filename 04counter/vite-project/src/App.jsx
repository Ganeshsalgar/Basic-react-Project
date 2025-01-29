import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addHandler  = () => {
    if(count > 19)  return;
    setCount(count+1)
  } 
  const removeHandler  = () => {
    if(count < 1)  return;
    setCount(count-1)
  } 

  return (
    <>
        <h1>Create the counter || Ganesh</h1>

        <p>this is the value counter : {count}</p>
        <button onClick={addHandler}>Add Count</button>
        <button onClick={removeHandler}>Remove Count</button>
    </>
  )
}

export default App
