// import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

/**
 * Buat Slice: untuk generate action and reduer.
 * menerima param object: name, initialState,  reducers
 */
const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        covids: data.provinces,
    },
    reducers: {
        updateCovids(state, action) {
            const {covids} = state;
            const {provinces, status, jumlah} = action.payload;

            //Find index of specific object using findIndex method.    
            const objIndex = covids.findIndex((obj => obj.kota === provinces));

            //Update object's name property.
            covids[objIndex][status] = parseInt(covids[objIndex][status]) + parseInt(jumlah);
        },
    },
});

// generate action and reducers
const covidReducer = covidSlice.reducer;
const { updateCovids } = covidSlice.actions;

// export action and reducers
export default covidReducer;
export { updateCovids };