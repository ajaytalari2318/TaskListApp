import React, { useContext } from 'react';
import { TaskContext } from './Context';
import { Link } from 'react-router-dom';
import TaskGrid from './TaskGrid';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <div className="max-w-xl mx-auto mt-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">📝 Welcome to Your Task List App!</h2>
        <p className="text-gray-800 text-sm mb-6">
          Stay organized, focused, and in control of your day.This app helps you:
        </p>
        <ul className="text-left text-gray-700 mb-6 list-disc list-inside space-y-2">
          <li>✅ Capture tasks instantly</li>
          <li>📅 Prioritize what matters</li>
          <li>🔔 Stay on top with reminders</li>
          <li>📊 Track your progress effortlessly</li>
        </ul>
        <p className="text-gray-800 mb-6">
          Start by adding your first task and take the first step toward a more productive you.
        </p>
        <Link
          to="/TaskCreation"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Create Your First Task
        </Link>
      </div>
    );
  }

  return <TaskGrid />;
};

export default Home;
