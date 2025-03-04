import { configureStore } from '@reduxjs/toolkit'
import  filterSort  from './Slices/filterSort'
import cart from './Slices/cartSlice'
import fetch from './Slices/fetchSlice'

export const store = configureStore({
  reducer: {
    filter: filterSort,
    cart,
    fetch
  },
})

export type RootState = ReturnType<typeof store.getState>; 