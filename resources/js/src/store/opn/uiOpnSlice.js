import { createSlice } from "@reduxjs/toolkit";

export const uiOpnSlice = createSlice({
    name: "uiOpn",
    initialState: {
        isOpenModalOPN: false,
    },
    reducers: {
        onOpenModalOPN: (state, { payload }) => {
            state.isOpenModalOPN = payload;
        },
    },
});

export const {
    onOpenModalOPN
} = uiOpnSlice.actions;
