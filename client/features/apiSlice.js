import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: [],
  location: '',
  birdName: '',
  spots: [],
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
    },
    setNewName: (state, action) => {
      state.birdName = action.payload;
    },
    clearFields: (state) => {
      state.birdName = '';
      state.location = '';
      document.getElementById('newLocation').value='';
      document.getElementById('newName').value='';
    },
    populateSpotting: (state, action) => {
      state.spots = action.payload;
    }
  }
})

export const { populateBirds, setNewLocation, setNewName, clearFields, populateSpotting } = stateSlice.actions
export default stateSlice.reducer