import { createSlice } from "@reduxjs/toolkit";

export const uiPlanificacionTipoSlice = createSlice({
    name: "uiPlanificacionTipo",
    initialState: {
        isOpenModalPlanificacionTipo: false,
        isOpenModalStatusPlanificacionTipo: false,
    },
    reducers: {
        onOpenModalPlanificacionTipo: (state, { payload }) => {
            state.isOpenModalPlanificacionTipo = payload;
        },
        onOpenModalStatusPlanificacionStatus: (state, { payload }) => {
            state.isOpenModalStatusPlanificacionTipo = payload;
        },
    },
});

export const {
    onOpenModalPlanificacionTipo,
    onOpenModalStatusPlanificacionStatus,
} = uiPlanificacionTipoSlice.actions;
