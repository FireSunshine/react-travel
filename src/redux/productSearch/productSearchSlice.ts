import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null
};

export const searchProduct: any = createAsyncThunk(
  'productSearch/searchProduct',
  async (paramaters: { keywords: string; pageNum: number | string; pageSize: number | string }, thunkAPI) => {
    const res = await axios.post('http://127.0.0.1:7001/api/product/search', {
      keywords: paramaters.keywords,
      pageNum: paramaters.pageNum,
      pageSize: paramaters.pageSize
    });
    return {
      data: res.data.data.data,
      pagination: res.data.data.pagination
    };
  }
);

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(searchProduct.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
