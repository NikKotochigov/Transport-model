import {configureStore} from "@reduxjs/toolkit";
import proposalsSlice from "../reducers/proposalsSlice";

export const store = configureStore({
    reducer: {
        proposals: proposalsSlice
    }
})