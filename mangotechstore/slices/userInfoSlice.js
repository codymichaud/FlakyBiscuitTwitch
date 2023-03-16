import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userInfo: [],
    loading: false,
    error: null,
  };
  
  export const fetchUserInfo = createAsyncThunk(
    'slice/fetchUserInfo',
    async () => {
        const userResponse = axios.get(`https://api.twitch.tv/helix/users?id=${process.env.NEXT_PUBLIC_TWITCH_CHANNEL_ID}`,
        {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`,
                'Client-Id': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
            }
        })
      const data = await userResponse.json();
        // console.log('user data', data)
       return data;
    }
  );

  const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addMatcher(fetchUserInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addMatcher(fetchUserInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
          })
          .addMatcher(fetchUserInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          });
    },
  });
  
export const userInfoReducer = userInfo.reducer;
export const { pending: fetchUserInfoPending, fulfilled: fetchUserInfoFulfilled, rejected: fetchUserInfoRejected } = fetchUserInfo;


  