import { legacy_createStore as createStore, /* combineReducers */ applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk';
import { actionLog } from './middlewares/actionLog';
// 兼容redux
import { combineReducers } from '@reduxjs/toolkit';
import { productDetailSlice } from './productDetail/productDetailSlice';

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetailSlice: productDetailSlice.reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

export type RootStore = ReturnType<typeof store.getState>;

export default store;
