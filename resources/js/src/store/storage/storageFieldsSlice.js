import { createSlice } from "@reduxjs/toolkit";

export const storageFieldsSlice = createSlice({
    name: "storageFields",
    initialState: {
        storageFilterFields: null,
    },
    reducers: {
        onSetStorageFilterFields: (state, { payload }) => {
            state.storageFilterFields = payload;
        },
        onClearStorageFields: (state) => {
            state.storageFilterFields = null;
        }
    },
});

export const {
    onSetStorageFilterFields,
    onClearStorageFields
} = storageFieldsSlice.actions;
