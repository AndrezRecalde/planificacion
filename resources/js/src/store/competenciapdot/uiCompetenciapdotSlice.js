import { createSlice } from "@reduxjs/toolkit";

export const uiCompetenciapdotSlice = createSlice({
    name: "uiCompetenciapdot",
    initialState: {
        isOpenModalCompetenciapdot: false,
        isOpenModalStatusCompetenciapdot: false,
    },
    reducers: {
        onOpenModalCompetenciapdot: (state, { payload }) => {
            state.isOpenModalCompetenciapdot = payload;
        },
        onOpenModalStatusCompetenciapdot: (state, { payload }) => {
            state.isOpenModalStatusCompetenciapdot = payload;
        },
    },
});

export const { onOpenModalCompetenciapdot, onOpenModalStatusCompetenciapdot } =
    uiCompetenciapdotSlice.actions;
