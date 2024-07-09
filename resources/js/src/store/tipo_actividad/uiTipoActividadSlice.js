import { createSlice } from "@reduxjs/toolkit";

export const uiTipoActividadSlice = createSlice({
    name: "uiTipoActividad",
    initialState: {
        isOpenModalTipoActividad: false,
    },
    reducers: {
        onOpenModalTipoActividad: (state, { payload }) => {
            state.isOpenModalTipoActividad = payload;
        },
    },
});

export const { onOpenModalTipoActividad } = uiTipoActividadSlice.actions;
