import { createSlice } from "@reduxjs/toolkit";

export const componentepdotSlice = createSlice({
    name: "componentepdot",
    initialState: {
        isLoading: 10,
        componentespdot: [],
        activateComponentepdot: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadComponentespdot: (state, { payload }) => {
            state.componentespdot = payload;
            state.isLoading = false;
        },
        onAddComponentepdot: (state, { payload }) => {
            state.componentespdot.push(payload);
            state.activateComponentepdot = null;
        },
        onUpdateComponentepdot: (state, { payload }) => {
            state.componentespdot = state.componentespdot.map((componente) => {
                if (componente.id === payload.id) {
                    return payload;
                }
                return componente;
            });
            state.activateComponentepdot = null;
        },
        onDeleteComponentepdot: (state) => {
            if (state.activateComponentepdot) {
                state.componentespdot = state.componentespdot.filter(
                    (componente) =>
                        componente.id !== state.activateComponentepdot.id
                );
            }
            state.activateComponentepdot = null;
            state.errores = undefined;
        },
        onSetActivateComponentepdot: (state, { payload }) => {
            state.activateComponentepdot = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearComponentespdot: (state) => {
            state.isLoading = false;
            state.componentespdot = [];
            state.activateComponentepdot = null;
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
    onLoadComponentespdot,
    onAddComponentepdot,
    onUpdateComponentepdot,
    onDeleteComponentepdot,
    onSetActivateComponentepdot,
    onClearComponentespdot,
    onLoadMessage,
    onLoadErrores,
} = componentepdotSlice.actions;
