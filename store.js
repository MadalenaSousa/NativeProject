import { configureStore } from "@reduxjs/toolkit";
import songSlice from './reducers/songslice'
import userSlice from './reducers/userslice'

const store = configureStore({
    reducer: {
        song: songSlice,
        user: userSlice
    }
})

export default store;