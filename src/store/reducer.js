import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: {},
  deduction: {
    hraExemption: 0,
    "80C": 0,
    standardDeduction: 50000,
  },
  investment: {},
};

const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    setIncome: (state, { payload }) => {
      state.income = payload;
    },
    setDeduction: (state, { payload }) => {
      state.deduction = payload;
    },
    setInvestment: (state, { payload }) => {
      state.investment = payload;
    },
  },
});

export const { setIncome, setDeduction, setInvestment } = taxSlice.actions;
export default taxSlice.reducer;
