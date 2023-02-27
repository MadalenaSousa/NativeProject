import { configureStore } from "@reduxjs/toolkit";
import songSlice from './reducers/songslice'

const store = configureStore({
    reducer: {
        song: songSlice,
    }
})

export default store;