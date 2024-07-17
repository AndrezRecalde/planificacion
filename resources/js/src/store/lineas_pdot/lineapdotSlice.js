import { createSlice } from "@reduxjs/toolkit";

export const lineapdotSlice = createSlice({
    name: "lineapdot",
    initialState: {
        isLoading: false,
        lineaspdot: [],
        activeLineapdot: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadLineaspdot: (state, { payload }) => {
            state.lineaspdot = payload;
            state.isLoading = false;
        },
        onAddLineapdot: (state, { payload }) => {
            state.lineaspdot.push(payload);
            state.activeLineapdot = null;
        },
        onUpdateLineapdot: (state, { payload }) => {
            state.lineaspdot = state.lineaspdot.map((linea) => {
                if (linea.id === payload.id) {
                    return payload;
                }
                return linea;
            });
            state.activeLineapdot = null;
        },
        onDeleteLineapdot: (state) => {
            if (state.activeLineapdot) {
                state.lineaspdot = state.lineaspdot.filter(
                    (linea) => linea.id === state.activeLineapdot.id
                );
            }
            state.activeLineapdot = null;
            state.errores = undefined;
        },
        onSetActivateLineapdot: (state, { payload }) => {
            state.activeLineapdot = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearLineaspdot: (state) => {
            state.isLoading = false;
            state.lineaspdot = [];
            state.activeLineapdot = null;
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
    onLoadLineaspdot,
    onAddLineapdot,
    onUpdateLineapdot,
    onDeleteLineapdot,
    onSetActivateLineapdot,
    onClearLineaspdot,
    onLoadMessage,
    onLoadErrores,
} = lineapdotSlice.actions;
