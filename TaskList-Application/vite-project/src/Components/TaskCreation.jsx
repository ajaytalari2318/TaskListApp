import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from './Context';

function TaskCreation() {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [eta, setEta] = useState('');
    const [progress, setProgress] = useState('');
    const [msg, setMsg] = useState('');

    const { addTask, taskToEdit, clearEditing } = useContext(TaskContext);

    useEffect(() => {
        if (taskToEdit) {
            setSubject(taskToEdit.subject);
            setDescription(taskToEdit.description);
            setEta(taskToEdit.eta);
            setProgress(taskToEdit.progress);
        }
    }, [taskToEdit]);



    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = { subject, description, eta, progress };

        // If editing and no changes were made, skip update
        if (taskToEdit && JSON.stringify(taskToEdit) === JSON.stringify(newTask)) {
            setMsg('⚠️ No changes detected.');
            setTimeout(() => setMsg(''), 2000);
            return;
        }

        addTask(newTask);
        clearEditing();
        setSubject('');
        setDescription('');
        setEta('');
        setProgress('');
        setMsg('✅ Task added successfully!');
        setTimeout(() => setMsg(''), 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Create your Task
            </h2>

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

            {/* Submit Button */}
            <div className="text-center mt-4">
                <button
                    type="submit"
                    className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-md font-semibold shadow-sm transition-all duration-200 ease-in-out cursor-pointer"
                >
                    ➕ Add Task
                </button>

                {msg && (
                    <div className="mt-2 text-green-600 font-medium transition-opacity duration-300">
                        {msg}
                    </div>
                )}
            </div>
        </form>
    );
}

export default TaskCreation;
