import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TasksList/TaskList";
import { addTaskActionCreator } from "./redux/features/tasksSlice/tasksSlice";

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTaskActionCreator(task));
  };

  return (
    <>
      <TaskForm action={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
