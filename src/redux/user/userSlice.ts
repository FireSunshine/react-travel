import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null
};

export const signIn: any = createAsyncThunk(
  'user/signIn',
  async (paramaters: { username: string; password: string }, thunkAPI) => {
    const res = await axios.post('http://127.0.0.1:7001/api/user/login', {
      username: paramaters.username,
      pawweord: paramaters.password
    });
    return res.data.data.token;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.error = null;
      state.loading = false;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action: any) => {
        state.loading = false;
        state.token = null;
        state.error = action.payload;
      });
  }
});
