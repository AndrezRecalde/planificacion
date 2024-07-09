import { createSlice } from "@reduxjs/toolkit";

export const uiTipoProyectoSlice = createSlice({
    name: "uiTipoProyecto",
    initialState: {
        isOpenModalTipoProyecto: false,
    },
    reducers: {
        onOpenModalTipoProyecto: (state, { payload }) => {
            state.isOpenModalTipoProyecto = payload;
        },
    },
});

export const { onOpenModalTipoProyecto } = uiTipoProyectoSlice.actions;
