import React, { useContext } from 'react';
import { TaskContext } from './Context';

function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
         <h1 className="text-2xl font-semibold mb-1 mt-0 absolute top-22 bottom-2">Your Tasks -</h1>
      {tasks.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">No Tasks Added</div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl">
            <div className="rounded-xl shadow-md border border-gray-200 bg-white">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-white uppercase text-sm tracking-wider">
                    <th className="px-4 py-3 text-left">TechStack</th>
                    <th className="px-6 py-3 text-left">Task Description</th>
                    <th className="px-5 py-3 text-left">ETA</th>
                    <th className="px-5 py-3 text-left">Progress</th>
                    <th className="px-1 py-3 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index} className="hover:bg-gray-50 border-t">
                      <td className="px-4 py-2">{task.subject}</td>
                      <td className="px-19 py-2">{task.description}</td>
                      <td className="px-1 py-2">{task.eta}</td>
                      <td className="px-5 py-2">{task.progress}</td>
                      <td className="px-7 py-2  border-amber-500">
                        <input type='text'></input>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );

}

export default Tasks