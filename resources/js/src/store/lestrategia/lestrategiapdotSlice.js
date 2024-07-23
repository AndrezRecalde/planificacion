import { createSlice } from "@reduxjs/toolkit";

export const lestrategiapdotSlice = createSlice({
    name: "lestrategiapdot",
    initialState: {
        isLoading: false,
        lestrategias: [],
        activateLestrategia: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadLestrategiaspdot: (state, { payload }) => {
            state.lestrategias = payload;
            state.isLoading = false;
        },
        onAddLestrategiapdot: (state, { payload }) => {
            state.lestrategias.push(payload);
            state.activateLestrategia = null;
            state.isLoading = false;
        },
        onUpdateLestrategiapdot: (state, { payload }) => {
            state.lestrategias = state.lestrategias.map((lestrategia) => {
                if (lestrategia.id === payload.id) {
                    return payload;
                }
                return lestrategia;
            });
            state.activateLestrategia = null;
        },
        onDeleteLEstrategiapdot: (state) => {
            if (state.activateLestrategia) {
                state.lestrategias = state.lestrategias.filter(
                    (lestrategia) =>
                        lestrategia.id !== state.activateLestrategia.id
                );
                state.activateLestrategia = null;
                state.errores = undefined;
            }
        },
        onSetActivateLestrategiapdot: (state, { payload }) => {
            state.activateLestrategia = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearLestrategiaspdot: (state) => {
            state.isLoading = false;
            state.lestrategias = [];
            state.activateLestrategia = null;
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
    onLoadLestrategiaspdot,
    onAddLestrategiapdot,
    onUpdateLestrategiapdot,
    onDeleteLEstrategiapdot,
    onSetActivateLestrategiapdot,
    onClearLestrategiaspdot,
    onLoadMessage,
    onLoadErrores,
} = lestrategiapdotSlice.actions;
