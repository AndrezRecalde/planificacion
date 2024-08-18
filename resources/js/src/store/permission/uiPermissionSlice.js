import { createSlice } from "@reduxjs/toolkit";

export const uiPermissionSlice = createSlice({
    name: "uiPermission",
    initialState: {
        isOpenModalPermission: false,
    },
    reducers: {
        onOpenModalPermission: (state, { payload }) => {
            state.isOpenModalPermission = payload;
        },
    },
});

export const { onOpenModalPermission } = uiPermissionSlice.actions;
