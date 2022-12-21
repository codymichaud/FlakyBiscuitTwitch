import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice 
export const iconslice = createSlice({
name: "icon",
initialState: {
     icon:'moon'
},
reducers: {
     iconMoon:state=>{
        state.icon= 'moon'
     },
     iconSun:state=>{
        state.icon= 'sun'
    },
   }
})
// config the store 
const store = configureStore({
   reducer: {
      icon: iconslice.reducer
   }
})

// export default the store 
export default store;

// export the action
export const iconAction = iconslice.actions;