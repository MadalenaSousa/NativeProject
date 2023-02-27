import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        allSongs: [],
        cartSongs: [],
        filteredSongs: []
    }
}

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setAllSongs: (state, action) => {
            state.value.allSongs = action.payload;
            state.value.filteredSongs = action.payload;
        },
        addSong: (state, action) => {
            state.value.cartSongs.push(action.payload);
        },
        removeSong: (state, action) => {
            state.value.cartSongs = state.value.cartSongs.filter(
                song => song.trackId !== action.payload.trackId
            );
        },
        filterSongs: (state, action) => {
            state.value.filteredSongs = state.value.allSongs.filter((song) =>
                song.trackName.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").includes(action.payload.toLowerCase())
            );
        }
    }
})

export const { setAllSongs, addSong, removeSong, filterSongs } = songSlice.actions

export default songSlice.reducer;