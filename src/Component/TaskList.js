import React from "react";

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0)
    return <p style={{ color: "#777" }}>No tasks to show</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "320px",
            margin: "0 auto 10px",
            backgroundColor: task.completed ? "#d4ffd4" : "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#555" : "#000",
              }}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              marginLeft: "10px",
              padding: "5px 8px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#f44336",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            DeleteTask
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
