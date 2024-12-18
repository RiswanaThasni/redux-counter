import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  value : 0
}

const appreducer = (state = initialState ,action)=>{
  switch(action.type){

    case 'INCREMENT' : 
      return{...state,value:state.value +1}

     case 'DECREMENT' :
      return{...state,value:state.value-1} 

     default :
      return state 

  }

 
}
const Storage = configureStore({
  reducer : appreducer,
})

export default Storage