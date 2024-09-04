import { createSlice } from "@reduxjs/toolkit";

export const objetivoSlice = createSlice({
    name: "objetivo",
    initialState: {
        isLoading: false,
        objetivos: [],
        activateObjetivo: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadObjetivos: (state, { payload }) => {
            state.objetivos = payload;
            state.isLoading = false;
        },
        onAddObjetivo: (state, { payload }) => {
            state.objetivos.push(payload);
            state.isLoading = false;
        },
        onUpdateObjetivo: (state, { payload }) => {
            state.objetivos = state.objetivos.map((objetivo) => {
                if (objetivo.id === payload.id) {
                    return payload;
                }
                return objetivo;
            });
            state.activateObjetivo = null;
            state.isLoading = false;
        },
        onDeleteObjetivo: (state, { payload }) => {
            if (state.activateObjetivo) {
                state.objetivos = state.objetivos.filter(
                    (objetivo) => objetivo.id === state.activateObjetivo.id
                );
            }
            state.activateObjetivo = null;
            state.errores = undefined;
        },
        onSetActivateObjetivo: (state, { payload }) => {
            state.activateObjetivo = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearObjetivos: (state) => {
            state.objetivos = [];
            state.activateObjetivo = null;
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
    onLoadObjetivos,
    onAddObjetivo,
    onUpdateObjetivo,
    onDeleteObjetivo,
    onSetActivateObjetivo,
    onClearObjetivos,
    onLoadMessage,
    onLoadErrores,
} = objetivoSlice.actions;
