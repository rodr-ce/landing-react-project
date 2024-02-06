import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import cartReducer from './cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const persitConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'user']
}

const persistedReducer = persistReducer(persitConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)