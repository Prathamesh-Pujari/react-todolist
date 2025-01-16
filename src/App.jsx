import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h1>TODO List</h1>
      </div>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
