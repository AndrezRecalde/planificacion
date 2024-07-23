import { createSlice } from "@reduxjs/toolkit";

export const competenciapdotSlice = createSlice({
    name: "competenciapdot",
    initialState: {
        isLoading: false,
        competenciaspdot: [],
        activateCompetenciapdot: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadCompetenciaspdot: (state, { payload }) => {
            state.competenciaspdot = payload;
            state.isLoading = false;
        },
        onAddCompetenciapdot: (state, { payload }) => {
            state.competenciaspdot.push(payload);
            state.activateCompetenciapdot = null;
        },
        onUpdateCompetenciapdot: (state, { payload }) => {
            state.competenciaspdot = state.competenciaspdot.map(
                (competencia) => {
                    if (competencia.id === payload.id) {
                        return payload;
                    }
                    return competencia;
                }
            );
            state.activateCompetenciapdot = null;
        },
        onDeleteCompetenciapdot: (state) => {
            if (state.activateCompetenciapdot) {
                state.competenciaspdot = state.competenciaspdot.filter(
                    (competencia) =>
                        competencia.id !== state.activateCompetenciapdot.id
                );
            }
            state.activateCompetenciapdot = null;
            state.errores = undefined;
        },
        onSetActivateCompetenciapdot: (state, { payload }) => {
            state.activateCompetenciapdot = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearCompetenciaspdot: (state) => {
            state.isLoading = false;
            state.competenciaspdot = [];
            state.activateCompetenciapdot = null;
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
    onLoadCompetenciaspdot,
    onAddCompetenciapdot,
    onUpdateCompetenciapdot,
    onDeleteCompetenciapdot,
    onSetActivateCompetenciapdot,
    onClearCompetenciaspdot,
    onLoadMessage,
    onLoadErrores,
} = competenciapdotSlice.actions;
