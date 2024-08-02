import { createSlice } from "@reduxjs/toolkit";
export const uiGobiernoSlice = createSlice({
    name: "uiGobierno",
    initialState: {
        isOpenModalGobierno: false,
        isOpenModalStatusGobierno: false,
        isOpenModalViewOPNGobierno: false,
    },
    reducers: {
        onOpenModalGobierno: (state, { payload }) => {
            state.isOpenModalGobierno = payload;
        },
        onOpenModalStatusGobierno: (state, { payload }) => {
            state.isOpenModalStatusGobierno = payload;
        },
        onOpenModalViewOPNGobierno: (state, { payload }) => {
            state.isOpenModalViewOPNGobierno = payload;
        },
    },
});

export const {
    onOpenModalGobierno,
    onOpenModalStatusGobierno,
    onOpenModalViewOPNGobierno,
} = uiGobiernoSlice.actions;
