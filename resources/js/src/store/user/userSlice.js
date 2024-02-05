import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    users: [],
    validate: undefined,
    errores: undefined
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        initialState
    },
    reducers: {
        onLoading: (state) => {
            state.isLoading = true;
        },
        onLoadUsers: (state, { payload }) => {
            state.users = payload;
            state.isLoading = false;
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
    onLoadUsers,
    onValidate,
    onClearValidates,
    onClearErrores,
} = userSlice.actions;
