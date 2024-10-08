import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counters/countersSlice"

const store = configureStore({
    reducer: {
        counters: counterReducer,
        // add author feature here...
    },
});

export default store;