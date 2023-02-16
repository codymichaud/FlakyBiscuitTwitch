;

import { configureStore } from "@reduxjs/toolkit";
import { channelInfo } from '../slices/channelInfoSlice';
import { userInfo } from '../slices/userInfoSlice';


// config the store 
const store = configureStore({
   reducer: {
      channelInfo: channelInfo.reducer,
      userInfo: userInfo.reducer,
   }
})

export default store;
