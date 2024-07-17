import { createSlice } from "@reduxjs/toolkit";

export const departamentoSlice = createSlice({
    name: "departamento",
    initialState: {
        isLoading: false,
        departamentos: [],
        activateDepartamento: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadDepartamentos: (state, { payload }) => {
            state.departamentos = payload;
            state.isLoading = false;
        },
        onAddDepartamento: (state, { payload }) => {
            state.departamentos.push(payload);
            state.activateDepartamento = null;
        },
        onUpdateDepartamento: (state, { payload }) => {
            state.departamentos = state.departamentos.map((departamento) => {
                if (departamento.id === payload.id) {
                    return payload;
                }
                return departamento;
            });
            state.activateDepartamento = null;
        },
        onDeleteDepartamento: (state) => {
            if (state.activateDepartamento) {
                state.departamentos = state.departamentos.filter(
                    (departamento) =>
                        departamento.id === state.activateDepartamento.id
                );
            }
            state.activateDepartamento = null;
            state.errores = undefined;
        },
        onSetActivateDepartamento: (state, { payload }) => {
            state.activateDepartamento = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearDepartamentos: (state) => {
            state.isLoading = false;
            state.departamentos = [];
            state.activateDepartamento = null;
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
    onLoadDepartamentos,
    onAddDepartamento,
    onUpdateDepartamento,
    onDeleteDepartamento,
    onSetActivateDepartamento,
    onClearDepartamentos,
    onLoadMessage,
    onLoadErrores,
} = departamentoSlice.actions;
