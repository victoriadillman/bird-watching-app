import { configureStore } from '@reduxjs/toolkit'
import stateSliceReducer from './features/apiSlice'

export const store = configureStore({
  reducer: {
    birds: stateSliceReducer
  },
})
