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
    },
    setNewName: (state, action) => {
      state.birdName = action.payload;
    },
    clearFields: (state) => {
      state.birdName = '';
      state.location = '';
      document.getElementById('newLocation').value='';
      document.getElementById('newName').value='';
    }
  }
})

export const { populateBirds, setNewLocation, setNewName, clearFields } = stateSlice.actions
export default stateSlice.reducer