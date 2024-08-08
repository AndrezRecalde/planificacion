import { createSlice } from "@reduxjs/toolkit";

export const uiUserSlice = createSlice({
    name: "uiUser",
    initialState: {
        isOpenModalUsuario: false,
        isOpenModalStatusUsuario: false,
    },
    reducers: {
        onOpenModalUsuario: (state, { payload }) => {
            state.isOpenModalStatusUsuario = payload;
        },
        onOpenModalStatusUsuario: (state, { payload }) => {
            state.isOpenModalStatusUsuario = payload;
        },
    },
});

export const { onOpenModalUsuario, onOpenModalStatusUsuario } =
    uiUserSlice.actions;
