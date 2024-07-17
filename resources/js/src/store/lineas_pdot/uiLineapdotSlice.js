import { createSlice } from "@reduxjs/toolkit";

export const uiLineapdotSlice = createSlice({
    name: "uiLineapdot",
    initialState: {
        isOpenModalLineapdot: false,
    },
    reducers: {
        onOpenModalLineapdot: (state, { payload }) => {
            state.isOpenModalLineapdot = payload;
        },
    },
});

export const { onOpenModalLineapdot } = uiLineapdotSlice.actions;
