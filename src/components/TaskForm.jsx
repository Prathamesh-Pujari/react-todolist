// TaskForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ addTask, updateTask, editableTask, setEditableTask }) => {
  const [task, setTask] = useState({
    assignedTo: "",
    status: "Pending",
    dueDate: "",
    priority: "Low",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (editableTask) {
      setTask(editableTask.task);
    }
  }, [editableTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableTask) {
      updateTask(editableTask.index, task);
    } else {
      addTask(task);
    }
    setTask({
      assignedTo: "",
      status: "Pending",
      dueDate: "",
      priority: "Low",
    });
    setEditableTask(null);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>{editableTask ? "Edit Task" : "Add Task"}</h2>
      <div>
        <label>Assigned To:</label>
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">{editableTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
