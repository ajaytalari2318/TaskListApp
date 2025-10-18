import React, { useContext, useState } from 'react';
import { TaskContext } from './Context';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskGrid() {
  const { tasks, startEditing, updateRemarks } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState('');
  const { deleteTask } = useContext(TaskContext);

  const navigate = useNavigate();

  const handleEdit = (task) => {
    startEditing(task);
    navigate('/EditTask');
  };

const handleDelete = (task) => {
  if (window.confirm("Are you sure you want to delete this task?")) {
    deleteTask(task);
  }
};



  const filteredTasks = tasks.filter((task) => {
    const term = searchTerm.toLowerCase();
    return (
      task.subject.toLowerCase().includes(term) ||
      task.description.toLowerCase().includes(term) ||
      task.progress.toLowerCase().includes(term)
    );
  });

  const uniqueSubjects = [...new Set(tasks.map(task => task.subject))];

  return (
    <div className="px-2">
     <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-2">
  {/* Left Section: Titles */}
  <div className="flex items-center gap-20 flex-wrap">
    <h1 className="text-2xl font-bold text-gray-700 relative bottom-1">🗂️ Your Tasks</h1>
    <h2 className="text-lg font-semibold text-gray-500 relative left-15">TechStack :</h2>

    {/* Filter Buttons */}
    <div className="flex gap-2 flex-wrap">
      <button
        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all duration-200 ${
          searchTerm === ''
            ? 'border-blue-500 text-white bg-blue-800'
            : 'border-gray-400 text-gray-700 hover:border-blue-500 hover:text-white hover:bg-blue-800'
        }`}
        onClick={() => setSearchTerm('')}
      >
        ALL
      </button>

      {uniqueSubjects.map((subject, index) => (
        <button
          key={index}
          className={`px-4 py-2 border rounded-md text-sm font-medium transition-all duration-200 ${
            searchTerm === subject
              ? 'border-blue-500 text-white bg-blue-800'
              : 'border-gray-400 text-gray-700 hover:border-blue-500 hover:text-white hover:bg-blue-800'
          }`}
          onClick={() => setSearchTerm(subject)}
        >
          {subject}
        </button>
      ))}
    </div>
  </div>

  {/* Right Section: Search Bar */}
  <div className="relative w-full sm:w-72">
    <FontAwesomeIcon
      icon={faSearch}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    />
    <input
      type="text"
      placeholder="Search TechStack/Concept..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg hover:border-black focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
</div>




      {/* Task Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTasks.map((task, index) => (
          <div
            key={task.id || index}
            className="relative bg-white rounded-lg border border-gray-900 shadow-sm overflow-hidden transition-transform duration-200 transform hover:scale-101 hover:border-black group"
          >
            <button
              className="absolute top-2 left-90 text-sm text-blue-600 font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={() => handleEdit(task)}
            >
              ✏️ Edit
            </button>

            <button
              className="absolute top-2 right-2 text-sm text-red-600 font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={() => handleDelete(task)} 
            >
             <FontAwesomeIcon
      icon={faTrash}></FontAwesomeIcon>   
             Delete
             
            </button>

            <div className="p-6 text-gray-800">
              <h2 className="text-lg font-semibold mb-2">📘 TechStack : {task.subject} </h2>
              <p className="text-sm mb-1">📝 Concept : {task.description}</p>
              <p className="text-sm mb-1">📅 ETA : {task.eta}</p>
              <p className="text-sm mb-1">📊 Progress : {task.progress}</p>

              <div className="mb-2">
                <label htmlFor={`remarks-${task.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                  📊 Remarks:
                </label>
                <textarea
                  id={`remarks-${task.id}`}
                  name="remarks"
                  rows="4"
                  defaultValue={task.remarks || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Add your remarks here"
                  onBlur={(e) => updateRemarks(task.id, e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskGrid;
