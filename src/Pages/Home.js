import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Creation and Management</h1>
      <Task onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="bg-white shadow-md p-4 rounded-md mb-4">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-600">Description: {task.description}</p>
            <p className="text-gray-600">Due Date: {task.dueDate}</p>
            <p className="text-gray-600">Priority: {task.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
