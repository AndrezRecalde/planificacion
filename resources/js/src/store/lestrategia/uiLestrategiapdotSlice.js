import { createSlice } from "@reduxjs/toolkit";

export const uiLestrategiapdotSlice = createSlice({
    name: "uiLestrategiapdot",
    initialState: {
        isOpenModalLestrategia: false,
        isOpenModalStatusLestrategia: false,
    },
    reducers: {
        onOpenModalLestrategia: (state, { payload }) => {
            state.isOpenModalLestrategia = payload;
        },
        onOpenModalStatusLestrategia: (state, { payload }) => {
            state.isOpenModalStatusLestrategia = payload;
        }
    },
});

export const { onOpenModalLestrategia, onOpenModalStatusLestrategia } = uiLestrategiapdotSlice.actions;
