import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
    name: "proveedor",
    initialState: {
        isLoading: false,
        proveedores: [],
        activateProveedor: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload; //payload: true or false
        },
        onLoadProveedores: (state, { payload }) => {
            state.proveedores = payload;
            state.isLoading = false;
        },
        onAddProveedor: (state, { payload }) => {
            state.proveedores.push(payload);
            state.activateProveedor = null;
        },
        onUpdateProveedor: (state, { payload }) => {
            state.proveedores = state.proveedores.map((proveedor) => {
                if (proveedor.id === payload.id) {
                    return payload;
                }
                return proveedor;
            });
            state.activateProveedor = null;
        },
        onDeleteProveedor: (state) => {
            if (state.activateProveedor) {
                state.proveedores = state.proveedores.filter(
                    (proveedor) => proveedor.id !== state.activateProveedor.id
                );
                state.activateProveedor = null;
                state.errores = undefined;
            }
        },
        onSetActivateProveedor: (state, { payload }) => {
            state.activateProveedor = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearProveedores: (state) => {
            state.isLoading = false;
            state.proveedores = [];
            state.activateProveedor = null;
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
    onLoadProveedores,
    onAddProveedor,
    onUpdateProveedor,
    onDeleteProveedor,
    onSetActivateProveedor,
    onClearProveedores,
    onLoadMessage,
    onLoadErrores,
} = proveedorSlice.actions;
