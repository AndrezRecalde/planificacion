import { createSlice } from "@reduxjs/toolkit";

export const uiComponentepdotSlice = createSlice({
    name: "uiComponentepdot",
    initialState: {
        isOpenModalComponentepdot: false,
        isOpenModalStatusComponentepdot: false,
    },
    reducers: {
        onOpenModalComponentepdot: (state, { payload }) => {
            state.isOpenModalComponentepdot = payload;
        },
        onOpenModalStatusComponentepdot: (state, { payload }) => {
            state.isOpenModalStatusComponentepdot = payload;
        },
    },
});

export const { onOpenModalComponentepdot, onOpenModalStatusComponentepdot } =
    uiComponentepdotSlice.actions;
