import { createSlice } from "@reduxjs/toolkit";

export const metapdotSlice = createSlice({
    name: "metapdot",
    initialState: {
        isLoading: false,
        metaspdot: [],
        activateMetapdot: null,
        message: undefined,
        errores: undefined,
    },
    reducers: {
        onLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        onLoadMetaspdot: (state, { payload }) => {
            state.metaspdot = payload;
            state.isLoading = false;
        },
        onAddMetapdot: (state, { payload }) => {
            state.metaspdot.push(payload);
            state.isLoading = false;
        },
        onUpdateMetapdot: (state, { payload }) => {
            state.metaspdot = state.metaspdot.map((meta) => {
                if (meta.id === payload.id) {
                    return payload;
                }
                return meta;
            });
            state.activateMetapdot = null;
            state.isLoading = false;
        },
        onDeleteMetapdot: (state) => {
            if (state.activateMetapdot) {
                state.metaspdot = state.metaspdot.filter(
                    (meta) => meta.id === state.activateMetapdot.id
                );
            }
            state.activateMetapdot = null;
            state.errores = undefined;
        },
        onSetActivateMetapdot: (state, { payload }) => {
            state.activateMetapdot = payload;
            state.isLoading = false;
            state.errores = undefined;
        },
        onClearMetapdot: (state) => {
            state.metaspdot = [];
            state.activateMetapdot = null;
            state.isLoading = false;
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
    onLoadMetaspdot,
    onAddMetapdot,
    onUpdateMetapdot,
    onDeleteMetapdot,
    onSetActivateMetapdot,
    onClearMetapdot,
    onLoadMessage,
    onLoadErrores
} = metapdotSlice.actions;
