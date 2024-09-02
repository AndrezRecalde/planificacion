import { createSlice } from "@reduxjs/toolkit";

export const programaSlice = createSlice({
    name: "programa",
    initialState: {
        isLoading: 10,
        programas: [],
        activatePrograma: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadProgramas: (state, { payload }) => {
            state.programas = payload;
            state.isLoading = false;
        },
        onAddPrograma: (state, { payload }) => {
            state.programas.push(payload);
            state.isLoading = false;
        },
        onUpdatePrograma: (state, { payload }) => {
            state.programas = state.programas.map((programa) => {
                if (programa.id === payload.id) {
                    return payload;
                }
                return programa;
            });
            state.activatePrograma = null;
            state.isLoading = false;
        },
        onDeletePrograma: (state) => {
            if (state.activatePrograma) {
                state.programas = state.programas.filter(
                    (programa) => programa.id === state.activatePrograma.id
                );
            }
            state.activatePrograma = null;
            state.errores = undefined;
        },
        onSetActivatePrograma: (state, { payload }) => {
            state.activatePrograma = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearProgramas: (state) => {
            state.programas = [];
            state.activatePrograma = null;
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
    onLoadProgramas,
    onAddPrograma,
    onUpdatePrograma,
    onDeletePrograma,
    onSetActivatePrograma,
    onClearProgramas,
    onLoadMessage,
    onLoadErrores,
} = programaSlice.actions;
