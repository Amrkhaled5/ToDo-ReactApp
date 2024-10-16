import Task from "./Task";
function TodoList({ tasks, deleteTask, finishTask, clearTasks }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((item) => (
          <Task
            key={item.id}
            item={item}
            deleteTask={deleteTask}
            finishTask={finishTask}
            clearTasks={clearTasks}
          />
        ))}
      </ul>
      {tasks.length > 0 ? (
        <button onClick={clearTasks}>Clear the List</button>
      ) : null}
    </div>
  );
}
export default TodoList;
