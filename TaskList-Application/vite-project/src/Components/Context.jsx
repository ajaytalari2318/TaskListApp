import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);

const startEditing = (task) => setTaskToEdit(task);
const clearEditing = () => setTaskToEdit(null);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 const addTask = (task) => {
  if (taskToEdit) {
    // Replace the existing task
    setTasks((prev) =>
      prev.map((t) =>
        t === taskToEdit ? task : t
      )
    );
  } else {
    // Add new task
    setTasks((prev) => [...prev, task]);
  }
};
const updateRemarks = (taskId, newRemarks) => {
  setTasks((prev) =>
    prev.map((t) =>
      t.id === taskId ? { ...t, remarks: newRemarks } : t
    )
  );
};
const deleteTask = (taskToDelete) => {
  setTasks((prev) => prev.filter((t) => t !== taskToDelete));
};


  return (
  <TaskContext.Provider value={{ tasks, addTask, taskToEdit, startEditing, clearEditing,updateRemarks,deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};
