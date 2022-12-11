import {createSlice} from "@reduxjs/toolkit";

interface ModalSliceType {
    modalState: boolean;
    dateState: { year: number, month: number, date: number, day: number };
    // yearState: number;
    // monthState: number;
    // dateState: number;
    // dayState: num;
}

const initialState: ModalSliceType = {
    modalState: false,
    dateState: {year: 0, month: 0, date: 0, day: 0}
    // yearState: 0,
    // monthState: 0,
    // dateState: 0,
    // dayState: ""
};

const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        setModalState: (state, action) => {
            state.modalState = action.payload;
        },
        setDateState: (state, action) => {
            state.dateState.year = action.payload.year;
            state.dateState.month = action.payload.month;
            state.dateState.date = action.payload.date;
            state.dateState.day = new Date(state.dateState.year, state.dateState.month - 1, state.dateState.date).getDay();
        }
        // setYearState: (state, action) => {
        //     state.yearState = action.payload;
        // },
        // setMonthState: (state, action) => {
        //     state.monthState = action.payload;
        // },
        // setDateState: (state, action) => {
        //     state.dateState = action.payload;
        // },
        // setDayState: (state, action) => {
        //     state.dayState = action.payload;
        // },
    },
});

export const {
    setModalState, setDateState
} = modalSlice.actions;
export default modalSlice.reducer;