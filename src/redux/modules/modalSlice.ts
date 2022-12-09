import {createSlice} from "@reduxjs/toolkit";

interface ModalSliceType {
    modalState: boolean;
}

const initialState: ModalSliceType = {
    modalState: false,
};

const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        setModalState: (state, action) => {
            state.modalState = action.payload;
        },

    },
});

export const {
    setModalState
} = modalSlice.actions;
export default modalSlice.reducer;