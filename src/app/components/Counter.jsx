"use client"
import { useState } from "react"

function Counter() {
    console.log("counter component");
    
    const [counter , setCounter] = useState(0)
    
  return (
    <>
    <button onClick={()=> setCounter(counter + 1)}>
        CounterAdd
    </button>
    <h3>
        {counter}
    </h3>
    </>
  )
}

export default Counter