import { createSlice } from "@reduxjs/toolkit";

export const uiEjeSlice = createSlice({
    name: "uiEje",
    initialState: {
        isOpenModalEje: false,
    },
    reducers: {
        onOpenModalEje: (state, { payload }) => {
            state.isOpenModalEje = payload;
        },
    },
});

export const {
    onOpenModalEje
} = uiEjeSlice.actions;
