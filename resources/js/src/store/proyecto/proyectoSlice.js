import { createSlice } from "@reduxjs/toolkit";

export const proyectoSlice = createSlice({
    name: "proyecto",
    initialState: {
        isLoading: false,
        proyectos: [],
        activateProyecto: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadProyectos: (state, { payload }) => {
            state.proyectos = payload;
            state.isLoading = false;
        },
        onAddProyecto: (state, { payload }) => {
            state.proyectos.push(payload);
            state.activateProyecto = null;
        },
        onUpdateProyecto: (state, { payload }) => {
            state.proyectos = state.proyectos.map((proyecto) => {
                if (proyecto.id === payload.id) {
                    return payload;
                }
                return proyecto;
            });
            state.activateProyecto = null;
        },
        onDeleteProyecto: (state) => {
            if (state.activateProyecto) {
                state.proyectos = state.proyectos.filter(
                    (proyecto) => proyecto.id !== state.activateProyecto.id
                );
                state.activateProyecto = null;
                state.errores = undefined;
            }
        },
        onSetActivateProyecto: (state, { payload }) => {
            state.activateProyecto = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearProyectos: (state) => {
            state.isLoading = false;
            state.proyectos = [];
            state.activateProyecto = null;
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
    onLoadProyectos,
    onAddProyecto,
    onUpdateProyecto,
    onDeleteProyecto,
    onSetActivateProyecto,
    onClearProyectos,
    onLoadMessage,
    onLoadErrores,
} = proyectoSlice.actions;
