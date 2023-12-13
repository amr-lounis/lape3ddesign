import { createSlice } from "@reduxjs/toolkit";

export const counter1Slice = createSlice({
  name: "counter1",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      console.log("+");
      state.value += 1;
    },
    decremented: (state) => {
      console.log("-");
      state.value -= 1;
    },
    pp: (state, action) => {
      console.log("counter1 :", action.payload, " | ", "", state.value);
    },
  },
});
