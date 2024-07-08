import { createSlice } from "@reduxjs/toolkit";

export const uiProyectoSlice = createSlice({
    name: "uiProyecto",
    initialState: {
        isOpenModalProyecto: false,
        isOpenDrawerProyecto: false
    },
    reducers: {
        onOpenModalProyecto: (state, { payload }) => {
            state.isOpenModalProyecto = payload;
        },
        onOpenDrawerProyecto: (state, { payload }) => {
            state.isOpenDrawerProyecto = payload;
        },
    },
});

export const { onOpenModalProyecto, onOpenDrawerProyecto } = uiProyectoSlice.actions;
