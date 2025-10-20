import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all, completed, pending

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <TaskForm onAdd={addTask} />

      <div style={{ marginBottom: "20px" }}>
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
                
              margin: "0 5px",
              padding: "8px 12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: filter === f ? "#4caf50" : "#ccc",
              color: filter === f ? "#fff" : "#000",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleCompleted}
      />
    </div>
  );
}

export default TaskManager;
