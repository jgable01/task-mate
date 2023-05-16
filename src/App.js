import Task from "./Components/Task";
import { useState } from "react";
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = useState([3]);
  return (
    <main>
      <div className="container">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}

export default App;
