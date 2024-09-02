import { createSlice } from "@reduxjs/toolkit";

export const uiProgramaSlice = createSlice({
    name: "uiPrograma",
    initialState: {
        isOpenModalPrograma: false,
        isOpenModalStatusPrograma: false,
    },
    reducers: {
        onOpenModalPrograma: (state, { payload }) => {
            state.isOpenModalPrograma = payload;
        },
        onOpenModalStatusPrograma: (state, { payload }) => {
            state.isOpenModalStatusPrograma = payload;
        },
    },
});

export const { onOpenModalPrograma, onOpenModalStatusPrograma } =
    uiProgramaSlice.actions;
