;

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import channelInfoReducer from "../slices/channelInfoSlice";
import { storeData } from '../slices/channelInfoSlice';


// config the store 
const store = configureStore({
   reducer: {
      channelInfo: storeData,
   }
})
// export default configureStore({

// })

// export default the store 
export default store;
