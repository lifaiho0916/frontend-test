import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    option: "A" | "B" | "C";
    discountCode: string,
    codeValidation: boolean,
    comments: Array<string>
}

export const initialState: IinitialState = {
    option: "A",
    discountCode: "",
    codeValidation: true,
    comments: []
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setOption: (state, action) => {
            state.option = action.payload;
        },
        setDiscountCode: (state, action) => {
            state.discountCode = action.payload;
        },
        setCodeValidation: (state, action) => {
            state.codeValidation = action.payload;
        },
        AddComment: (state, action) => {
            state.comments = [...state.comments, action.payload];
        }
    },
});

export const {
    setOption,
    setDiscountCode,
    setCodeValidation,
    AddComment
} = mainSlice.actions;

export default mainSlice.reducer;
