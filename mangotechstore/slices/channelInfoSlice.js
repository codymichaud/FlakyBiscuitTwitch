import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  channelInfo: null,
  loading: false,
  error: null,
};

export const fetchChannelInfo = createAsyncThunk(
  'slice/fetchChannelInfo',
  async () => {
    const response = await axios.get(
      `https://api.twitch.tv/helix/channels?broadcaster_id=${process.env.NEXT_PUBLIC_TWITCH_CHANNEL_ID}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`,
          'Client-Id': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
        },
      }
    );
    console.log('checking response', response);
    const data = await response.data.data[0];
    console.log('data', data);
    return data;
  }
);

const channelInfo = createSlice({
  name: 'channelInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(fetchChannelInfo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(fetchChannelInfo.fulfilled, (state, action) => {
        // console.log('action.payload', action)
        // console.log('checking state', state)
        state.loading = false;
        state.channelInfo = action.payload;
        // console.log(state.channelInfo)
      })
      .addMatcher(fetchChannelInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const channelInfoReducer = channelInfo.reducer;
export const {
  pending: fetchChannelInfoPending,
  fulfilled: fetchChannelInfoFulfilled,
  rejected: fetchChannelInfoRejected,
} = fetchChannelInfo;
