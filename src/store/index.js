import { configureStore } from "@reduxjs/toolkit";

import modelReducer from "./modelSlice";

const store = configureStore({
    reducer:{
        modelReducer,
    }
})


export default store;