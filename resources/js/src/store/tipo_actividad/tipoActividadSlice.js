import { createSlice } from "@reduxjs/toolkit";

export const tipoActividadSlice = createSlice({
    name: "tipoActividad",
    initialState: {
        isLoading: false,
        tipoActividades: [],
        activateTipoActividad: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload; //payload: true or false
        },
        onLoadTipoActividades: (state, { payload }) => {
            state.tipoActividades = payload;
            state.isLoading = false;
        },
        onAddTipoActividad: (state, { payload }) => {
            state.tipoActividades.push(payload);
            state.activateTipoActividad = null;
        },
        onUpdateTipoActividad: (state, { payload }) => {
            state.tipoActividades = state.tipoActividades.map((tipo) => {
                if (tipo.id === payload.id) {
                    return payload;
                }
                return tipo;
            });
            state.activateTipoActividad = null;
        },
        onDeleteTipoActividad: (state) => {
            if (state.activateTipoActividad) {
                state.tipoActividades = state.tipoActividades.filter(
                    (tipo) => tipo.id !== state.activateTipoActividad.id
                );
                state.activateTipoActividad = null;
                state.errores;
            }
        },
        onSetActivateTipoActividad: (state, { payload }) => {
            state.activateTipoActividad = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearTipoActividades: (state) => {
            state.isLoading = false;
            state.tipoActividades = [];
            state.activateTipoActividad = null;
        },
        onLoadMessage: (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
        },
        onLoadErrores: (state, { payload }) => {
            state.errores = payload;
            state.isLoading = false;
        }
    },
});

export const {
    onLoading,
    onLoadTipoActividades,
    onAddTipoActividad,
    onUpdateTipoActividad,
    onDeleteTipoActividad,
    onSetActivateTipoActividad,
    onClearTipoActividades,
    onLoadMessage,
    onLoadErrores
} = tipoActividadSlice.actions;
