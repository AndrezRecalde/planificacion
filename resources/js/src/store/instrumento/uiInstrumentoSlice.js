import { createSlice } from "@reduxjs/toolkit";

export const uiInstrumentoSlice = createSlice({
    name: "uiInstrumento",
    initialState: {
        isOpenModalInstrumento: false,
    },
    reducers: {
        onOpenModalInstrumento: (state, { payload }) => {
            state.isOpenModalInstrumento = payload;
        },
    },
});

export const {
    onOpenModalInstrumento
} = uiInstrumentoSlice.actions;
