import { createSlice } from "@reduxjs/toolkit";

export const uiLestrategiapdotSlice = createSlice({
    name: "uiLestrategiapdot",
    initialState: {
        isOpenModalLestrategia: false,
    },
    reducers: {
        onOpenModalLestrategia: (state, { payload }) => {
            state.isOpenModalLestrategia = payload;
        },
    },
});

export const { onOpenModalLestrategia } = uiLestrategiapdotSlice.actions;
