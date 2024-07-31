import { createSlice } from "@reduxjs/toolkit";

export const opnSlice = createSlice({
    name: "opn",
    initialState: {
        isLoading: false,
        OPN: [],
        activateOPN: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadOPN: (state, { payload }) => {
            state.OPN = payload;
            state.isLoading = false;
        },
        onAddOPN: (state, { payload }) => {
            state.OPN.push(payload);
            state.activateOPN = null;
        },
        onUpdateOPN: (state, { payload }) => {
            state.OPN = state.OPN.map((objetivo) => {
                if (objetivo.id === payload.id) {
                    return payload;
                }
                return objetivo;
            });
            state.activateOPN = null;
        },
        onDeleteOPN: (state) => {
            if (state.activateOPN) {
                state.OPN = state.OPN.filter(
                    (objetivo) => objetivo.id === state.activateOPN.id
                );
            }
            state.activateOPN = null;
            state.errores = undefined;
        },
        onSetActivateOPN: (state, { payload }) => {
            state.activateOPN = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearOPN: (state) => {
            state.isLoading = false;
            state.OPN = [];
            state.activateOPN = null;
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
    onLoadOPN,
    onAddOPN,
    onUpdateOPN,
    onDeleteOPN,
    onSetActivateOPN,
    onClearOPN,
    onLoadMessage,
    onLoadErrores,
} = opnSlice.actions;
