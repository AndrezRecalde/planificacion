import { createSlice } from "@reduxjs/toolkit";

export const permissionSlice = createSlice({
    name: "permission",
    initialState: {
        isLoading: false,
        permissions: [],
        activatePermission: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadPermissions: (state, { payload }) => {
            state.permissions = payload;
            state.isLoading = false;
        },
        onAddPermission: (state, { payload }) => {
            state.permissions.push(payload);
            state.activatePermission = null;
        },
        onUpdatePermission: (state, { payload }) => {
            state.permissions = state.permissions.map((permission) => {
                if (permission.id === payload.id) {
                    return payload;
                }
                return permission;
            });
            state.activatePermission = null;
        },
        onDeletePermission: (state) => {
            if (state.activatePermission) {
                state.permissions = state.permissions.filter(
                    (permission) =>
                        permission.id === state.activatePermission.id
                );
            }
            state.activatePermission = null;
            state.errores = undefined;
        },
        onSetActivatePermission: (state, { payload }) => {
            state.activatePermission = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearPermissions: (state) => {
            state.isLoading = false;
            state.permissions = [];
            state.activatePermission = null;
        },
        onLoadMessage: (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
        },
        onLoadErrores: (state, { payload }) => {
            state.permissions = payload;
            state.isLoading = false;
        },
    },
});

export const {
    onLoading,
    onLoadPermissions,
    onAddPermission,
    onUpdatePermission,
    onDeletePermission,
    onSetActivatePermission,
    onClearPermissions,
    onLoadMessage,
    onLoadErrores,
} = permissionSlice.actions;
