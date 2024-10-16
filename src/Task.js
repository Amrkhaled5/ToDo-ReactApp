function Task({ item, deleteTask, finishTask }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.isDone}
        onChange={() => finishTask(item.id)}
      />
      <span style={item.isDone ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => deleteTask(item.id)}>❌</button>
    </li>
  );
}
export default Task;
