const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.id}-{task.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TaskList;
