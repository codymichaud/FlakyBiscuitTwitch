
import { configureStore } from "@reduxjs/toolkit";
import { channelInfoReducer } from '../slices/channelInfoSlice';
import { userInfoReducer } from '../slices/userInfoSlice';


// config the store 
const store = configureStore({
   reducer: {
      channelInfo: channelInfoReducer,
      userInfo: userInfoReducer,
   }
})

export default store;
