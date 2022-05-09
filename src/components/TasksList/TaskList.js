const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              {task.id}-{task.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TaskList;
