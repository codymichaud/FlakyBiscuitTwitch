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
      console.log('this is doing something', state, payload)
      state.channelInfo = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeData } = channelInfo.actions

// export default channelInfo.reducer

// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

// const initialState = {
//   channelInfo: [],
// }

// export const channelInfo = createSlice({
//   name: 'channelInfo',
//   initialState,
//   reducers: {
//     fetchData: (state, payload) => {
//         console.log('checking dis payload', payload)
//       const getChannelInfo = axios.get(`https://api.twitch.tv/helix/channels?broadcaster_id=${payload.payload.channelID}`,
//       {
//         headers: {
//             'Authorization': `Bearer ${payload.payload.accessToken}`,
//             'Client-Id': `${payload.payload.clientID}`,
//         }
//     })
//       getChannelInfo.then(response => {
//         console.log('checking response', response)
//         state.channelInfo = response.data.data
//       })
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { fetchData } = channelInfo.actions

// export default channelInfo.reducer