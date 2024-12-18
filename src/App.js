import {  useDispatch, useSelector } from "react-redux";
import React from 'react'


function App() {

  const count = useSelector((state)=>state.value)
  const dispatch = useDispatch()


  const handleIncrement = (e)=>{
    e.preventDefault()

    dispatch({type : 'INCREMENT'})

  }
 
  const handleDecrement = (e)=>{
    e.preventDefault()

    dispatch({type : 'DECREMENT'})
  }


  return (
    
    <div>
    <form>
      <button id='decrement' name='decrement' onClick={handleDecrement}>Decrement</button>
      <label id='count'>Count : {count}</label>
      <button id='increment' name="increment" onClick={handleIncrement}>Increment</button>

    </form>
      

    
    </div>
      
      
   
  )
}



export default App
