import { createSlice } from "@reduxjs/toolkit";

export const uiObjetivoSlice = createSlice({
    name: "uiObjetivo",
    initialState: {
        isOpenModalObjetivo: false,
        isOpenModalStatusObjetivo: false,
    },
    reducers: {
        onOpenModalObjetivo: (state, { payload }) => {
            state.isOpenModalObjetivo = payload;
        },
        onOpenModalStatusObjetivo: (state, { payload }) => {
            state.isOpenModalStatusObjetivo = payload;
        },
    },
});

export const { onOpenModalObjetivo, onOpenModalStatusObjetivo } =
    uiObjetivoSlice.actions;
