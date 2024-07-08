import { createSlice } from "@reduxjs/toolkit";

export const uiProveedorSlice = createSlice({
    name: "uiProveedor",
    initialState: {
        isOpenModalProveedor: false,
    },
    reducers: {
        onOpenModalProveedor: (state, { payload }) => {
            state.isOpenModalProveedor = payload; //payload: true or false
        },
    },
});

export const { onOpenModalProveedor } = uiProveedorSlice.actions;
