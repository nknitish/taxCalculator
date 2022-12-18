import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //All Income
  income: {},

  //Deduction + Exemption
  deduction: {
    //Exemption
    hraExemption: 0,
    otherExemption: 0, // Not in use now
    //Deductions
    deduction80C: 0,
    standardDeduction: 50000,
    otherDeduction: 0, //Not in use now
  },

  //80C
  investment80C: {},

  // HRA
  annualRent: 0,
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
    setInvestment80C: (state, { payload }) => {
      state.investment80C = payload;
    },
    setAnnualRent: (state, { payload }) => {
      state.annualRent = payload;
    },
  },
});

export const { setIncome, setDeduction, setInvestment80C, setAnnualRent } =
  taxSlice.actions;
export default taxSlice.reducer;
