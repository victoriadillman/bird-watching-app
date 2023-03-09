import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: [],
  location: '',
  birdName: '',
  spots: [],
  userName: '',
  userPhoto: '',
  count: 0,
  nickname: ''
}

export const stateSlice = createSlice({
  name: 'birds',
  initialState,
  reducers: {
    populateBirds: (state, action) => {
      console.log(action.payload)
      let counter = 0;
      action.payload.forEach(elem => counter++)
      state.value = action.payload;
      state.count = counter;
    },
    populateUser: (state, action) => {
      state.userName = action.payload[0].name;
      state.userPhoto = action.payload[0].photo;
    },
    setNewLocation: (state, action) => {
      state.location = action.payload;
    },
    setNewName: (state, action) => {
      state.birdName = action.payload;
    },
    setNewName: (state, action) => {
      state.nickname = action.payload;
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

export const { populateBirds, populateUser, setNewLocation, setNewName, clearFields, populateSpotting } = stateSlice.actions
export default stateSlice.reducer