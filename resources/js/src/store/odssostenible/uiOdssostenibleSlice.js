import { createSlice } from "@reduxjs/toolkit";

export const uiOdssostenibleSlice = createSlice({
    name: "uiOdssostenible",
    initialState: {
        isOpenModalOdssostenible: false,
        isOpenModalStatusOdssostenible: false,
    },
    reducers: {
        onOpenModalOdssostenible: (state, { payload }) => {
            state.isOpenModalOdssostenible = payload;
        },
        onOpenModalStatusOdssostenible: (state, { payload }) => {
            state.isOpenModalStatusOdssostenible = payload;
        },
    },
});

export const { onOpenModalOdssostenible, onOpenModalStatusOdssostenible } =
    uiOdssostenibleSlice.actions;
