import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        allSongs: [],
        cartSongs: []
    }
}

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setAllSongs: (state, action) => {
            state.value.allSongs = action.payload;
        },
        addSong: (state, action) => {
            state.value.cartSongs.push(action.payload);
        },
        removeSong: (state, action) => {
            state.value.cartSongs = state.value.cartSongs.filter(
                song => song.trackId !== action.payload.trackId
            );
        }
    }
})

export const { setAllSongs, addSong, removeSong } = songSlice.actions

export default songSlice.reducer;