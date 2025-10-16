import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faPlus, faSignIn, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <div >
     
     <div className="w-full bg-blue-400 py-4 px-6 mb-0.5 flex justify-center items-center rounded-2xl">
  <h1 className="text-4xl font-bold text-white">Task List</h1>
</div>


   
      {/* <div className="flex justify-between items-center w-full">
       
        <h1 className="text-2xl font-semibold">Your Tasks</h1> */}

      <div className='flex gap-0.5 justify-end p-3'>

      <Link to={'/Profile'}>
          <button className="text-m bg-gray-30 hover:bg-gray-200 text-black px-3 py-1 rounded font-semibold cursor-pointer flex items-center gap-0.5 mt-1 ">
           Profile
            <FontAwesomeIcon icon={faUser} />
          </button>
          </Link>

        <Link to={'/TaskCreation'}>
          <button className="text-m bg-gray-30 hover:bg-gray-200 text-black px-3 py-1 rounded font-semibold cursor-pointer flex items-center gap-0.5 mt-1 ">
            Add Task
            <FontAwesomeIcon icon={faPlus} />
          </button>
          </Link>

          <Link to={'/'}>
          <button className="text-m bg-gray-30 hover:bg-gray-100 text-black px-3 py-1 rounded font-semibold cursor-pointer flex items-center gap-0.5 mt-1">
            Home
             <FontAwesomeIcon icon={faHome} />
          </button>
          </Link>
        </div>
      </div>

  )
}

export default Navbar