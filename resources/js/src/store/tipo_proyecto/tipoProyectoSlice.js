import { createSlice } from "@reduxjs/toolkit";

export const tipoProyectoSlice = createSlice({
    name: "tipoProyecto",
    initialState: {
        isLoading: false,
        tipoProyectos: [],
        activateTipoProyecto: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload; //payload: true or false
        },
        onLoadTipoProyectos: (state, { payload }) => {
            state.tipoProyectos = payload;
            state.isLoading = false;
        },
        onAddTipoProyecto: (state, { payload }) => {
            state.tipoProyectos.push(payload);
            state.activateTipoProyecto = null;
            state.isLoading = false;
        },
        onUpdateTipoProyecto: (state, { payload }) => {
            state.tipoProyectos = state.tipoProyectos.map((tipo) => {
                if (tipo.id === payload.id) {
                    return payload;
                }
                return tipo;
            });
            state.activateTipoProyecto = null;
            state.isLoading = false;
        },
        onDeleteTipoProyecto: (state) => {
            if (state.activateTipoProyecto) {
                state.tipoProyectos = state.tipoProyectos.filter(
                    (tipo) => tipo.id !== state.activateTipoProyecto.id
                );
                state.activateTipoProyecto = null;
                state.errores = undefined;
                state.isLoading = false;
            }
        },
        onSetActivateTipoProyecto: (state, { payload }) => {
            state.activateTipoProyecto = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearTipoProyecto: (state) => {
            state.isLoading = false;
            state.tipoProyectos = [];
            state.activateTipoProyecto = null;
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
    onLoadTipoProyectos,
    onAddTipoProyecto,
    onUpdateTipoProyecto,
    onDeleteTipoProyecto,
    onSetActivateTipoProyecto,
    onClearTipoProyecto,
    onLoadMessage,
    onLoadErrores,
} = tipoProyectoSlice.actions;
