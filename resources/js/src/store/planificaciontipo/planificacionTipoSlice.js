import { createSlice } from "@reduxjs/toolkit";

export const planificacionTipoSlice = createSlice({
    name: "planificacionTipo",
    initialState: {
        isLoading: false,
        planificacionTipos: [],
        activatePlanificacionTipo: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadPlanificacionTipos: (state, { payload }) => {
            state.planificacionTipos = payload;
            state.isLoading = false;
        },
        onAddPlanificacionTipo: (state, { payload }) => {
            state.planificacionTipos.push(payload);
            state.activatePlanificacionTipo = null;
        },
        onUpdatePlanificacionTipo: (state, { payload }) => {
            state.planificacionTipos = state.planificacionTipos.map((tipo) => {
                if (tipo.id === payload.id) {
                    return payload;
                }
                return tipo;
            });
            state.activatePlanificacionTipo = null;
        },
        onDeletePlanificacionTipo: (state) => {
            if (state.activatePlanificacionTipo) {
                state.planificacionTipos = state.planificacionTipos.filter(
                    (tipo) => tipo.id !== state.activatePlanificacionTipo.id
                );
                state.activatePlanificacionTipo = null;
                state.errores = undefined;
            }
        },
        onSetActivatePlanificacion: (state, { payload }) => {
            state.activatePlanificacionTipo = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearPlanificacionTipos: (state) => {
            state.isLoading = false;
            state.planificacionTipos = [];
            state.activatePlanificacionTipo = null;
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
    onLoadPlanificacionTipos,
    onAddPlanificacionTipo,
    onUpdatePlanificacionTipo,
    onDeletePlanificacionTipo,
    onSetActivatePlanificacion,
    onClearPlanificacionTipos,
    onLoadMessage,
    onLoadErrores
} = planificacionTipoSlice.actions;
