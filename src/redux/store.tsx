import { legacy_createStore as createStore, /* combineReducers */ applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk';
import { actionLog } from './middlewares/actionLog';
// 兼容redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productDetailSlice } from './productDetail/productDetailSlice';
import { productSearchSlice } from './productSearch/productSearchSlice';
import { userSlice } from './user/userSlice';
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { shoppingCartSlice } from './shoppingCart/shoppingCartSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSlice']
};

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetailSlice: productDetailSlice.reducer,
  productSearchSlice: productSearchSlice.reducer,
  userSlice: userSlice.reducer,
  shoppingCartSlice: shoppingCartSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), actionLog],
  devTools: true
});

const persistor = persistStore(store);

export type RootStore = ReturnType<typeof store.getState>;

export default { store, persistor };
