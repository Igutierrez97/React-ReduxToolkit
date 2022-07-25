import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({

  name: 'counter',

  initialState:{
    counter:0
  },

  reducers: {
    increment: (state) => {
     
      state.counter += 1
    },
    decrement: (state) =>{
      state.counter -= 1
    },

    incrementBy2: (state,by) =>{
      state.counter += by.payload
    },

  },
})


export const { increment, decrement, incrementBy2 } = counterSlice.actions

export default counterSlice.reducer


