import React from "react";
import { useState } from "react";
import Task from "./Task";

function AddTask({ tasks = [], setTasks = (f) => f }) {
  // Function to return a date getDate()

  //handleSubmit()
  // const newTask = {
  //   id: Math.floor(Math.random() * 10000) + 1,
  //   title: event.target.task.value

  const [task, setTask] = useState({});

  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const fullDate = `${day}/${month}/${year} ${hour}:${minute}`;
    return fullDate;
  };

  const handleChange = (event) => {
    event.preventDefault();
    setTask({ ...task, title: event.target.value });
  };

  const handleSubmit = (event) => {
    if (task.title) {
      event.preventDefault();
      const newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        title: task.title,
        date: getDate(),
      };
      setTasks([...tasks, newTask]);
      setTask({ ...task, title: "" });
    }
  };


  return (
    <div className="addTask">
      <input
        type="text"
        placeholder="Add Task"
        onChange={handleChange}
        value={task.title}
      />
      <button className="btn-add" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
