import { createSlice } from "@reduxjs/toolkit";

export const uiDepartamentoSlice = createSlice({
    name: "uiDepartamento",
    initialState: {
        isOpenModalDepartamento: false,
        isOpenModalAddDirectores: false,
    },
    reducers: {
        onOpenModalDepartamento: (state, { payload }) => {
            state.isOpenModalDepartamento = payload; //payload: true or false
        },
        onOpenModalAddDirectores: (state, { payload }) => {
            state.isOpenModalAddDirectores = payload; //payload: true or false
        },
    },
});

export const { onOpenModalDepartamento, onOpenModalAddDirectores } = uiDepartamentoSlice.actions;
