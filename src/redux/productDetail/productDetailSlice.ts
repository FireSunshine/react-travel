import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    fetchStart: (state) => {
      // return { ...state, loading: true }; 替换
      // immer 赋值
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchError: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
