import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: {},
};

const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    setIncome: (state, { payload }) => {
      state.income = payload;
    },
  },
});

export const { setIncome } = taxSlice.actions;
export default taxSlice.reducer;
