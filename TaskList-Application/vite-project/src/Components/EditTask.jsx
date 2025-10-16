import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from './Context';
import { useNavigate } from 'react-router-dom';

function EditTask() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [eta, setEta] = useState('');
  const [progress, setProgress] = useState('');
  const [msg, setMsg] = useState('');

  const { addTask, taskToEdit, clearEditing } = useContext(TaskContext);
  const navigate = useNavigate();

  // Redirect if no task is selected
  useEffect(() => {
    if (!taskToEdit) {
      navigate('/');
    } else {
      setSubject(taskToEdit.subject);
      setDescription(taskToEdit.description);
      setEta(taskToEdit.eta);
      setProgress(taskToEdit.progress);
    }
  }, [taskToEdit, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { subject, description, eta, progress };

    // Validation
    if (!subject || !description || !eta || !progress) {
      setMsg('⚠️ Please fill out all fields.');
      setTimeout(() => setMsg(''), 3000);
      return;
    }

    // No changes check
    if (JSON.stringify(taskToEdit) === JSON.stringify(newTask)) {
      setMsg('⚠️ No changes detected.');
      setTimeout(() => setMsg(''), 3000);
      return;
    }

    addTask(newTask);
    clearEditing();
    setMsg('✅ Task updated successfully!');
    setTimeout(() => {
      setMsg('');
      navigate('/');
    }, 2000);
  };

  const handleCancel = () => {
    clearEditing();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Edit Task</h2>

      {msg && (
        <div className="mb-4 text-center text-green-600 font-medium transition-opacity duration-300">
          {msg}
        </div>
      )}

      {/* Subject */}
      <div className="mb-4">
        <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-1">TechStack</label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="">Select a subject</option>
          <option value="DSA">DSA</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-1">Task Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {/* ETA */}
      <div className="mb-4">
        <label htmlFor="eta" className="block text-lg font-medium text-gray-700 mb-1">ETA</label>
        <input
          type="date"
          id="eta"
          value={eta}
          onChange={(e) => setEta(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {/* Progress */}
      <div className="mb-6">
        <label htmlFor="progress" className="block text-lg font-medium text-gray-700 mb-1">Progress</label>
        <select
          id="progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="">Select progress</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="text-center flex justify-center gap-4">
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold shadow-sm transition-all duration-200 ease-in-out cursor-pointer"
        >
          ✅ Update Task
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-semibold shadow-sm transition-all duration-200 ease-in-out cursor-pointer"
        >
          ❌ Cancel
        </button>
      </div>
    </form>
  );
}

export default EditTask;
