import { useState } from "react";
function AddTaskForm({ addtask }) {
  const [desc, setdes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newTask = { id: Date.now(), description: desc, isDone: false };
    addtask(newTask);
    setdes("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your future</h3>
      <input
        type="text"
        placeholder="Task..."
        value={desc}
        onChange={(e) => {
          setdes(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
export default AddTaskForm;
