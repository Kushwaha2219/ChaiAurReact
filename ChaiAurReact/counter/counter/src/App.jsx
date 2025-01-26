
import './App.css'
import { useState } from 'react';
function App() {
  
  const [counter , setCounter] = useState(15);
  
  function add(){
    if(counter < 20) setCounter(counter + 1)
      console.log(counter)
  }
  const remove = () =>{
    if (counter > 0)setCounter (counter - 1)
      console.log(counter)
  }
  return (
    <>
      
      <h1>Hello, This is a counter project</h1>
      <h1>Counter = {counter} </h1>
      <button onClick={add}> Click me to Increase</button>
      <button onClick={remove}> Click me to Decrease</button>
    </>
  )
}

export default App
