import React from "react";
import { useNavigate } from "react-router-dom";

const TaskList = ({ tasks, setEditableTask, deleteTask }) => {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    setEditableTask({ task: tasks[index], index });
    navigate("/form");
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(index);
    }
  };

  const handleAdd = () => {
    setEditableTask(null);
    navigate("/form");
  };

  return (
    <div className="container">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.assignedTo}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="add-button-container">
        <button className="add-button" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
