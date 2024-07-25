import { createSlice } from "@reduxjs/toolkit";

export const ejeSlice = createSlice({
    name: "eje",
    initialState: {
        isLoading: false,
        ejes: [],
        activateEje: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadEjes: (state, { payload }) => {
            state.ejes = payload;
            state.isLoading = false;
        },
        onAddEje: (state, { payload }) => {
            state.ejes.push(payload);
            state.activateEje = null;
        },
        onUpdateEje: (state, { payload }) => {
            state.ejes = state.ejes.map((eje) => {
                if (eje.id === payload.id) {
                    return payload;
                }
                return eje;
            });
            state.activateEje = null;
        },
        onDeleteEje: (state) => {
            if (state.activateEje) {
                state.ejes = state.ejes.filter(
                    (eje) => eje.id === state.activateEje.id
                );
            }
            state.activateEje = null;
            state.errores = undefined;
        },
        onSetActivateEje: (state, { payload }) => {
            state.activateEje = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearEjes: (state) => {
            state.isLoading = false;
            state.ejes = [];
            state.activateEje = null;
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
    onLoadEjes,
    onAddEje,
    onUpdateEje,
    onDeleteEje,
    onSetActivateEje,
    onClearEjes,
    onLoadMessage,
    onLoadErrores,
} = ejeSlice.actions;
