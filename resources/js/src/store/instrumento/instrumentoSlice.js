import { createSlice } from "@reduxjs/toolkit";

export const instrumentoSlice = createSlice({
    name: "instrumento",
    initialState: {
        isLoading: false,
        instrumentos: [],
        activateInstrumento: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadInstrumentos: (state, { payload }) => {
            state.instrumentos = payload;
            state.isLoading = false;
        },
        onAddInstrumento: (state, { payload }) => {
            state.instrumentos.push(payload);
            state.isLoading = false;
        },
        onUpdateInstrumento: (state, { payload }) => {
            state.instrumentos = state.instrumentos.map((instrumento) => {
                if (instrumento.id === payload.id) {
                    return payload;
                }
                return instrumento;
            });
            state.activateInstrumento = null;
            state.isLoading = false;
        },
        onDeleteInstrumento: (state) => {
            if (state.activateInstrumento) {
                state.instrumentos = state.instrumentos.filter(
                    (instrumento) =>
                        instrumento.id === state.activateInstrumento.id
                );
            }
            state.activateInstrumento = null;
            state.errores = undefined;
        },
        onSetActivateInstrumento: (state, { payload }) => {
            state.activateInstrumento = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearInstrumentos: (state) => {
            state.instrumentos = [];
            state.activateInstrumento = null;
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
    onLoadInstrumentos,
    onAddInstrumento,
    onUpdateInstrumento,
    onDeleteInstrumento,
    onSetActivateInstrumento,
    onClearInstrumentos,
    onLoadMessage,
    onLoadErrores,
} = instrumentoSlice.actions;
