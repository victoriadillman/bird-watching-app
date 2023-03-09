import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

export const stateSlice = createSlice({
    name: 'birds',
    initialState,
    reducers: {
        populateBirds: (state, action) => {
            console.log('I am running populateBirds rducer', action.payload)
            state.value = action.payload;
        }
    }
})

export const { populateBirds } = stateSlice.actions
export default stateSlice.reducer