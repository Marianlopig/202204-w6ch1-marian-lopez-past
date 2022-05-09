import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { myTasks: [], lastId: 0 },
  reducers: {
    addTask: (state, action) => {
      action.payload.id = state.lastId++;
      state.myTasks.push(action.payload);
      return state;
    },
  },
});

export const { addTask: addTaskActionCreator } = tasksSlice.actions;
export default tasksSlice.reducer;
