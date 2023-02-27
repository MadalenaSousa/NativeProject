import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        allSongs: []
    }
}

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setAllSongs: (state, action) => {
            state.value.allSongs = action.payload;
        }
    }
})

export const { setAllSongs } = songSlice.actions

export default songSlice.reducer;