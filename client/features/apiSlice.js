import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: [],
  location: '',
  birdName: '',
}

export const stateSlice = createSlice({
  name: 'birds',
  initialState,
  reducers: {
    populateBirds: (state, action) => {
      state.value = action.payload;
    },
    setNewLocation: (state, action) => {
      state.location = action.payload;
      console.log('I am running newLocation reducer', state.location)
    },
    setNewName: (state, action) => {
      state.birdName = action.payload;
      console.log('I am running newName reducer', state.birdName)
    }
  }
})

export const { populateBirds, setNewLocation, setNewName } = stateSlice.actions
export default stateSlice.reducer