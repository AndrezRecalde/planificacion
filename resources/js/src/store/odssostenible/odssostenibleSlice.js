import { createSlice } from "@reduxjs/toolkit";

export const odssostenibleSlice = createSlice({
    name: "odssostenible",
    initialState: {
        isLoading: false,
        odssostenibles: [],
        activateOdssostenible: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadOdssostenibles: (state, { payload }) => {
            state.odssostenibles = payload;
            state.isLoading = false;
        },
        onAddOdssostenible: (state, { payload }) => {
            state.odssostenibles.push(payload);
            state.isLoading = false;
        },
        onUpdateOdssostenible: (state, { payload }) => {
            state.odssostenibles = state.odssostenibles.map((objetivo) => {
                if (objetivo.id === payload.id) {
                    return payload;
                }
                return objetivo;
            });
            state.activateOdssostenible = null;
            state.isLoading = false;
        },
        onDeleteOdssostenible: (state) => {
            if (state.activateOdssostenible) {
                state.odssostenibles = state.odssostenibles.filter(
                    (objetivo) => objetivo.id === state.activateOdssostenible.id
                );
            }
            state.activateOdssostenible = null;
            state.errores = undefined;
        },
        onSetActivateOdssostenible: (state, { payload }) => {
            state.activateOdssostenible = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearOdssostenible: (state) => {
            state.odssostenibles = [];
            state.activateOdssostenible = null;
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
    onLoadOdssostenibles,
    onAddOdssostenible,
    onUpdateOdssostenible,
    onDeleteOdssostenible,
    onSetActivateOdssostenible,
    onClearOdssostenible,
    onLoadMessage,
    onLoadErrores,
} = odssostenibleSlice.actions;
