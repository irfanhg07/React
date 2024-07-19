import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = ()=>{
  if(counter >= 20){
    <h3>You are exceeding the counter</h3>
    setCounter(20);
  }
  else{


    console.log("Clicked ", counter);
    setCounter(counter+1)
  }
  }

  const subValue = ()=>{
    if(counter <= 0){
      <h3>You are exceeding the counter</h3>
      setCounter(0);
    }
    else
    setCounter(counter -1);
  }  
  return (
    <>
    // added a comment
      <h1>This is vite app </h1>
      <h2>Counter {counter}</h2>

      <button
      onClick={addValue}>Increment {counter}</button>

      <button 
      onClick={subValue}>Decrement {counter}</button>
    </>
  )
}

export default App
