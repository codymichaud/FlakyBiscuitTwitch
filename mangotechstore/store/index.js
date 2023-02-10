;

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import channelInfoReducer from "../slices/channelInfoSlice";

// config the store 
const store = configureStore({
   reducer: {
      channelInfo: channelInfoReducer,
   }
})

// export default the store 
export default store;
