import { createSlice } from "@reduxjs/toolkit";
import { uiProveedorSlice } from "../proveedor/uiProveedorSlice";

export const uiProyectoSlice = createSlice({
    name: "uiProyecto",
    initialState: {
        isOpenModalProyecto: false,
    },
    reducers: {
        onOpenModalProyecto: (state, { payload }) => {
            state.isOpenModalProyecto = payload;
        },
    },
});

export const { onOpenModalProyecto } = uiProyectoSlice.actions;
