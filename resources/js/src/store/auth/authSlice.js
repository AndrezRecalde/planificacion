import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: {},
    validate: undefined,
    errores: undefined,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onLoading: (state) => {
            state.isLoading = true;
        },
        onAuthenticate: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false;
        },
        onLogout: (state, { payload }) => {
            state.isLoading = false;
            state.user = {};
            state.errores = payload;
        },
        onValidate: (state, { payload }) => {
            state.isLoading = false;
            state.validate = payload;
        },
        onClearValidates: (state) => {
            state.isLoading = false;
            state.validate = undefined;
        },
        onClearErrores: (state) => {
            state.errores = undefined;
        },
    },
});

export const {
    onLoading,
    onAuthenticate,
    onLogout,
    onValidate,
    onClearValidates,
    onClearErrores,
} = authSlice.actions;
