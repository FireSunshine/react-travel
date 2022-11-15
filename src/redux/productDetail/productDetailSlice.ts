import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null
};

export const getProductDetail: any = createAsyncThunk(
  'productDetail/getProductDetail',
  async (id: string, thunkAPI) => {
    const { data } = await axios.post('http://127.0.0.1:7001/api/product/detail', { id });
    return data.data;
  }
);

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    // fetchStart: (state) => {
    //   // return { ...state, loading: true }; 替换
    //   // immer 赋值
    //   state.loading = true;
    // },
    // fetchSuccess: (state, action) => {
    //   state.data = action.payload;
    //   state.loading = false;
    //   state.error = null;
    // },
    // fetchError: (state, action: PayloadAction<string | null>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // }
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    }
  }
});
