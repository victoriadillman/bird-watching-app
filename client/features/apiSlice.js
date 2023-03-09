import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: []
}

export const stateSlice = createSlice({
  name: 'birds',
  initialState,
  reducers: {
    populateBirds: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { populateBirds } = stateSlice.actions
export default stateSlice.reducer