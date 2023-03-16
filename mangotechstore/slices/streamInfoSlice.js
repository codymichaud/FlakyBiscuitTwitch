import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    streamInfo: {
        data: [],
        loading: false,
        error: null,
    }

  };
  
  export const fetchStreamInfo = createAsyncThunk(
    'slice/fetchStreamInfo',
    async () => {
        const getStreams = axios.get(`https://api.twitch.tv/helix/videos?user_id=${process.env.NEXT_PUBLIC_TWITCH_CHANNEL_ID}`,
        {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`,
                'Client-Id': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
            }
        })
      const data = await getStreams.json();
        console.log('user data', data)
       return data;
    }
  );

  const streamInfo = createSlice({
    name: 'streamInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addMatcher(fetchStreamInfo.pending, (state) => {
            state.streamInfo.loading = true;
            state.streamInfo.error = null;
          })
          .addMatcher(fetchStreamInfo.fulfilled, (state, action) => {
            console.log('checkingy payload', action.payload)
            state.streamInfo.loading = false;
            state.streamInfo.gameName = action.payload;
          })
          .addMatcher(fetchStreamInfo.rejected, (state, action) => {
            state.streamInfo.loading = false;
            state.streamInfo.error = action.error;
          });
    },
  });
  
export const streamInfoReducer = streamInfo.reducer;
export const { pending: fetchStreamInfoPending, fulfilled: fetchStreamInfoFulfilled, rejected: fetchStreamInfoRejected } = fetchStreamInfo;


  