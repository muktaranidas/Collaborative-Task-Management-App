import React, { useEffect, useState } from "react";
import Task from "./Task";
import CreateTeam from "../component/CreateTeam";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "In Progress"
        ? "Completed"
        : "In Progress";
    setTasks(updatedTasks);
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
            <p className="text-gray-600">Priority: {task.priority}</p>{" "}
            <p className="text-gray-600">Assignee: {task.assignee}</p>{" "}
            {/* Display assignee */}
            <p className="text-gray-600">
              Status: {task.status} {/* Display task status */}
            </p>
            <div className="mt-2">
              <button
                onClick={() => toggleTaskStatus(index)} // Toggle status on click
                className={`${
                  task.status === "Completed"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white px-2 py-1 rounded`}
              >
                {task.status === "Completed" ? "In Progress" : "Completed"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <CreateTeam></CreateTeam>
    </div>
  );
};

export default Home;
