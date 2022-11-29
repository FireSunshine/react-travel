import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ShoppingCarttate {
  loading: boolean;
  error: string | null;
  carts: any[];
}

const initialState: ShoppingCarttate = {
  loading: true,
  error: null,
  carts: []
};

// 获取购物车列表
export const getShoppingCart: any = createAsyncThunk(
  'shoppingCart/getShoppingCart',
  async (token: string, thunkAPI) => {
    const res = await axios.post('', {
      headers: {
        Authorization: token
      }
    });
    return res?.data?.data?.shoppingCartItems;
  }
);

// 添加购物车
export const addShoppingCart: any = createAsyncThunk(
  'shoppingCart/addShoppingCart',
  async (parameters: { token: string; productId: string }, thunkAPI) => {
    const res = await axios.post(
      '',
      {
        productId: parameters.productId
      },
      {
        headers: {
          Authorization: parameters.token
        }
      }
    );
    return res?.data?.data?.shoppingCart;
  }
);

// 删除购物车
export const clearShoppingCart: any = createAsyncThunk(
  'shoppingCart/clearShoppingCart',
  async (paramaters: { productIds: any[]; token: string }, thunkAPI) => {
    await axios.post(
      '',
      {
        productIds: paramaters.productIds
      },
      {
        headers: {
          Authorization: paramaters.token
        }
      }
    );
  }
);

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShoppingCart.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getShoppingCart.rejected, (state, action: any) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addShoppingCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addShoppingCart.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(addShoppingCart.rejected, (state, action: any) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(clearShoppingCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearShoppingCart.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(clearShoppingCart.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
