import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import TaskCreation from './Components/TaskCreation';
import Tasks from './Components/Tasks';
import { TaskProvider } from './Components/Context';
import TaskGrid from './Components/TaskGrid';
import EditTask from './Components/EditTask';
import Profile from './Components/Profile';
import Home from './Components/Home'; // Import the new wrapper

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home instead of TaskGrid */}
          <Route path="/TaskCreation" element={<TaskCreation />} />
          <Route path="/EditTask" element={<EditTask />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}


export default App;
