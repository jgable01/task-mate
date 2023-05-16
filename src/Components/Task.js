import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import AddTask from "./AddTask";

function Task({ tasks = [], setTasks }) {
  const [editing, setEditing] = useState(false);

  const handleDelete = (id) => {
    // return all tasks except the one with the id passed in
    // set the new list oef tasks
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <div className="grid">
      {/* map() goes here*/}
      {tasks.map((task) => (
        <section key={task.id} className="card">
          <section>
            <h3>{task.title}</h3>
            <div className="options">
              <div className="date">
                <p>{task.date}</p>
              </div>
              <div className="icons">
                <FaPen
                  className="edit"
                  title="Edit Task"
                />
                <FaTrash
                  className="delete"
                  title="Delete Task"
                  onClick={() => handleDelete(task.id)}
                />
              </div>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
}

export default Task;
