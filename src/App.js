import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TasksList/TaskList";

function App() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
