// import configure store: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../feature/covidSlice";

const store = configureStore({
    reducer: {
        covids: covidReducer,
    },
});

export default store;