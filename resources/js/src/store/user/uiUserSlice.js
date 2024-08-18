import { createSlice } from "@reduxjs/toolkit";

export const uiUserSlice = createSlice({
    name: "uiUser",
    initialState: {
        isOpenModalUsuario: false,
        isOpenModalStatusUsuario: false,
        isOpenModalAddPermission: false
    },
    reducers: {
        onOpenModalUsuario: (state, { payload }) => {
            state.isOpenModalStatusUsuario = payload;
        },
        onOpenModalStatusUsuario: (state, { payload }) => {
            state.isOpenModalStatusUsuario = payload;
        },
        onOpenModalAddPermission: (state, { payload }) => {
            state.isOpenModalAddPermission = payload;
        }
    },
});

export const { onOpenModalUsuario, onOpenModalStatusUsuario, onOpenModalAddPermission } =
    uiUserSlice.actions;
