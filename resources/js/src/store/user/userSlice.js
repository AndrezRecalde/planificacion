import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    usuarios: [],
    activateUsuario: null,
    message: undefined,
    errores: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        initialState,
    },
    reducers: {
        onLoading: (state) => {
            state.isLoading = true;
        },
        onLoadUsers: (state, { payload }) => {
            state.users = payload;
            state.isLoading = false;
        },
        onAddUsuario: (state, { payload }) => {
            state.usuarios.push(payload);
            state.activateUsuario = null;
        },
        onUpdateUsuario: (state, { payload }) => {
            state.usuarios = state.usuarios.map((usuario) => {
                if (usuario.id === payload.id) {
                    return payload;
                }
                return usuario;
            });
            state.activateUsuario = null;
            state.isLoading = false;
        },
        onDeleteUsuario: (state) => {
            if (state.activateUsuario) {
                state.usuarios = state.usuarios.filter(
                    (usuario) => usuario.id === state.activateUsuario.id
                );
            }
            state.activateUsuario = null;
            state.errores = undefined;
        },
        onSetActivateUsuario: (state, { payload }) => {
            state.activateUsuario = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearUsuario: (state) => {
            state.isLoading = false;
            state.usuarios = [];
            state.activateUsuario = null;
        },
        onLoadMessage: (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
        },
        onLoadErrores: (state, { payload }) => {
            state.errores = payload;
            state.isLoading = false;
        },
    },
});

export const {
    onLoading,
    onLoadUsers,
    onAddUsuario,
    onUpdateUsuario,
    onDeleteUsuario,
    onSetActivateUsuario,
    onClearUsuario,
    onLoadMessage,
    onLoadErrores,
} = userSlice.actions;
