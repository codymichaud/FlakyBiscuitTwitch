import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userInfo: [],
}
console.log('made it in  here')
export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    storeInfo: (state, payload) => {
        console.log('checking payload', payload)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeInfo } = userInfo.actions

