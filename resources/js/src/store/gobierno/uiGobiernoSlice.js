import { createSlice } from "@reduxjs/toolkit";
export const uiGobiernoSlice = createSlice({
    name: "uiGobierno",
    initialState: {
        isOpenModalGobierno: false,
        isOpenModalStatusGobierno: false,
    },
    reducers: {
        onOpenModalGobierno: (state, { payload }) => {
            state.isOpenModalGobierno = payload;
        },
        onOpenModalStatusGobierno: (state, { payload }) => {
            state.isOpenModalStatusGobierno = payload;
        },
    },
});

export const { onOpenModalGobierno, onOpenModalStatusGobierno } =
    uiGobiernoSlice.actions;
