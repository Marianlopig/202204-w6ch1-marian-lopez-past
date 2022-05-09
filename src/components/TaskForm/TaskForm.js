import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskActionCreator } from "../../redux/features/tasksSlice/tasksSlice";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { name: taskName };
    dispatch(addTaskActionCreator(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={taskName} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TaskForm;
