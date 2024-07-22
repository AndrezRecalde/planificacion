import { createSlice } from "@reduxjs/toolkit";

export const categoriapdotSlice = createSlice({
    name: "categoriapdot",
    initialState: {
        isLoading: false,
        categoriaspdot: [],
        activateCategoriapdot: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadCategoriaspdot: (state, { payload }) => {
            state.categoriaspdot = payload;
            state.isLoading = false;
        },
        onAddCategoriapdot: (state, { payload }) => {
            state.categoriaspdot.push(payload);
            state.activateCategoriapdot = null;
        },
        onUpdateCategoriapdot: (state, { payload }) => {
            state.categoriaspdot = state.categoriaspdot.map((categoria) => {
                if (categoria.id === payload.id) {
                    return payload;
                }
                return categoria;
            });
            state.activateCategoriapdot = null;
        },
        onDeleteCategoriapdot: (state) => {
            if (state.activateCategoriapdot) {
                state.categoriaspdot = state.categoriaspdot.filter(
                    (categoria) =>
                        categoria.id !== state.activateCategoriapdot.id
                );
            }
            state.activateCategoriapdot = null;
            state.errores = undefined;
        },
        onSetCategoriapdot: (state, { payload }) => {
            state.activateCategoriapdot = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearCategoriaspdot: (state) => {
            state.isLoading = false;
            state.categoriaspdot = [];
            state.activateCategoriapdot = null;
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
    onLoadCategoriaspdot,
    onAddCategoriapdot,
    onUpdateCategoriapdot,
    onDeleteCategoriapdot,
    onSetCategoriapdot,
    onClearCategoriaspdot,
    onLoadMessage,
    onLoadErrores,
} = categoriapdotSlice.actions;
