import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => [...state, action.payload],
  },
});

export const { addTask: addTaskActionCreator } = tasksSlice.actions;
export default tasksSlice.reducer;
