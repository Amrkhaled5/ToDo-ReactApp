import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
function App() {
  const [tasks, setTask] = useState([]);

  function updateTasks(task) {
    setTask((tasks) => [...tasks, task]);
  }
  function deleteTask(id) {
    setTask((tasks) => tasks.filter((t) => t.id !== id));
  }
  function finishTask(id) {
    setTask((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }
  function clearTasks() {
    const confirmed = window.confirm(
      "Are you sure you want to Clear your Tasks"
    );
    if (confirmed) setTask([]);
  }

  return (
    <div className="app">
      <Header />
      <AddTaskForm addtask={updateTasks} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        finishTask={finishTask}
        clearTasks={clearTasks}
      />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
