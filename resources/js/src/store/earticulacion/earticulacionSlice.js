import { createSlice } from "@reduxjs/toolkit";

export const earticulacionSlice = createSlice({
    name: "earticulacion",
    initialState: {
        isLoading: false,
        earticulaciones: [],
        activateEarticulacion: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadEarticulaciones: (state, { payload }) => {
            state.earticulaciones = payload;
            state.isLoading = false;
        },
        onAddEarticulacion: (state, { payload }) => {
            state.earticulaciones.push(payload);
            state.activateEarticulacion = null;
        },
        onUpdateEarticulacion: (state, { payload }) => {
            state.earticulaciones = state.earticulaciones.map(
                (earticulacion) => {
                    if (earticulacion.id === payload.id) {
                        return payload;
                    }
                    return earticulacion;
                }
            );
            state.activateEarticulacion = null;
        },
        onDeleteEarticulacion: (state) => {
            if (state.activateEarticulacion) {
                state.earticulaciones = state.earticulaciones.filter(
                    (earticulacion) =>
                        earticulacion.id === state.activateEarticulacion.id
                );
            }
            state.activateEarticulacion = null;
            state.errores = undefined;
        },
        onSetActivateEarticulacion: (state, { payload }) => {
            state.activateEarticulacion = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearEarticulacion: (state) => {
            state.isLoading = false;
            state.earticulaciones = [];
            state.activateEarticulacion = null;
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
    onLoadEarticulaciones,
    onAddEarticulacion,
    onUpdateEarticulacion,
    onDeleteEarticulacion,
    onSetActivateEarticulacion,
    onClearEarticulacion,
    onLoadMessage,
    onLoadErrores,
} = earticulacionSlice.actions;
