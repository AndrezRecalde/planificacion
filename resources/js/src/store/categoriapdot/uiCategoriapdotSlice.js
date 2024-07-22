import { createSlice } from "@reduxjs/toolkit";

export const uiCategoriapdotSlice = createSlice({
    name: "uiCategoriapdot",
    initialState: {
        isOpenModalCategoriapdot: false,
        isOpenModalStatusCategoriapdot: false,
    },
    reducers: {
        onOpenModalCategoriapdot: (state, { payload }) => {
            state.isOpenModalCategoriapdot = payload;
        },
        onOpenModalStatusCategoriapdot: (state, { payload }) => {
            state.isOpenModalStatusCategoriapdot = payload;
        },
    },
});

export const { onOpenModalCategoriapdot, onOpenModalStatusCategoriapdot } =
    uiCategoriapdotSlice.actions;
