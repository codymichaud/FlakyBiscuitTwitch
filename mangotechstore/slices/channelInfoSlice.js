import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  channelInfo: [],
}
console.log('made it in  here')
export const channelInfo = createSlice({
  name: 'channelInfo',
  initialState,
  reducers: {
    storeData: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('channelInfo Reducer', state, payload)
      state.channelInfo = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeData } = channelInfo.actions

