import { createSlice } from "@reduxjs/toolkit";

export const uiEarticulacionSlice = createSlice({
    name: "uiEarticulacion",
    initialState: {
        isOpenModalEarticulacion: false,
        isOpenModalStatusEarticulacion: false,
    },
    reducers: {
        onOpenModalEarticulacion: (state, { payload }) => {
            state.isOpenModalEarticulacion = payload;
        },
        onOpenModalStatusEarticulacion: (state, { payload }) => {
            state.isOpenModalStatusEarticulacion = payload;
        },
    },
});

export const { onOpenModalEarticulacion, onOpenModalStatusEarticulacion } =
    uiEarticulacionSlice.actions;
