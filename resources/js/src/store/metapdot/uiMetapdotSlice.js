import { createSlice } from "@reduxjs/toolkit";

export const uiMetapdotSlice = createSlice({
    name: "uiMetapdot",
    initialState: {
        isOpenModalMetapdot: false,
        isOpenModalStatusMetapdot: false,
    },
    reducers: {
        onOpenModalMetapdot: (state, { payload }) => {
            state.isOpenModalMetapdot = payload;
        },
        onOpenModalStatusMetapdot: (state, { payload }) => {
            state.isOpenModalStatusMetapdot = payload;
        },
    },
});

export const { onOpenModalMetapdot, onOpenModalStatusMetapdot } =
    uiMetapdotSlice.actions;
