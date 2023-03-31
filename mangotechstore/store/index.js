import { configureStore } from '@reduxjs/toolkit';
import { channelInfoReducer } from '../slices/channelInfoSlice';
import { userInfoReducer } from '../slices/userInfoSlice';
import { streamInfoReducer } from '../slices/streamInfoSlice';

// config the store
const store = configureStore({
  reducer: {
    channelInfo: channelInfoReducer,
    userInfo: userInfoReducer,
    streamInfo: streamInfoReducer,
  },
});

export default store;
