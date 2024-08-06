import { createSlice } from "@reduxjs/toolkit";


export const gobiernoSlice = createSlice({
    name: "gobierno",
    initialState: {
        isLoading: false,
        gobiernos: [],
        activateGobierno: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadGobiernos: (state, { payload }) => {
            state.gobiernos = payload;
            state.isLoading = false;
        },
        onAddGobierno: (state, { payload }) => {
            state.gobiernos.push(payload);
            state.isLoading = false;
        },
        onUpdateGobierno: (state, { payload }) => {
            state.gobiernos = state.gobiernos.map((gobierno) => {
                if (gobierno.id === payload.id) {
                    return payload;
                }
                return gobierno;
            });
            state.activateGobierno = null;
            state.isLoading = false;
        },
        onDeleteGobierno: (state) => {
            if (state.activateGobierno) {
                state.gobiernos = state.gobiernos.filter(
                    (gobierno) => gobierno.id === state.activateGobierno.id
                );
            }
            state.activateGobierno = null;
            state.errores = undefined;
        },
        onSetActivateGobierno: (state, { payload }) => {
            state.activateGobierno = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearGobiernos: (state) => {
            state.gobiernos = [];
            state.activateGobierno = null;
            state.isLoading = false;
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
    onLoadGobiernos,
    onAddGobierno,
    onUpdateGobierno,
    onDeleteGobierno,
    onSetActivateGobierno,
    onClearGobiernos,
    onLoadMessage,
    onLoadErrores,
} = gobiernoSlice.actions;
