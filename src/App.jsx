import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      assignedTo: "Default User",
      status: "Pending",
      dueDate: "2025-01-31",
      priority: "Medium",
    },
  ]);
  const [editableTask, setEditableTask] = useState(null);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TaskList
              tasks={tasks}
              setEditableTask={setEditableTask}
              deleteTask={deleteTask}
            />
          }
        />
        <Route
          path="/form"
          element={
            <TaskForm
              addTask={addTask}
              updateTask={updateTask}
              editableTask={editableTask}
              setEditableTask={setEditableTask}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
