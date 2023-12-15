import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
const Table = () => {
   let [TaskList, setTaskList] = useState([]);

   const navigate = useNavigate();

   const handleDelete = (indexdelete) => {
      const filterdata = TaskList.filter((item, index) => index !== indexdelete)
      console.log("filterdata", filterdata);
      setTaskList(filterdata);
      localStorage.setItem('taskList', JSON.stringify(filterdata));
   }

   const handleEdit = (indexEdit) => {
      navigate(`/AddOrEditTask/${indexEdit}`);
   }


   useEffect(() => {
      const data = JSON.parse(localStorage.getItem('taskList')) || [];

      setTaskList(data)
   }, [])
   return (
      <div className="antialiased font-sans bg-gray-200">
         <div className=" mx-auto px-4 sm:px-8">
            <div className="py-8">
               <div>
                  <h2 className="text-2xl font-semibold ">Users</h2>
               </div>
               <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <NavLink to="/AddOrEditTask">
                     <button
                        type="button"
                        className="float-right hover:bg-gray-900 bg-gray-600 mb-4 rounded-md hover:rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Add Task
                     </button>
                  </NavLink>
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                     <table className="min-w-full leading-normal">
                        <thead className='bg-gray'>
                           <tr>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 NO.
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Title
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Description
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Action
                              </th>
                           </tr>
                        </thead>
                        <tbody className='bg-gray-light'>
                           {TaskList.map((item, index) => {
                              return (
                                 <tr key={index} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <td className='px-6 py-2'>
                                       <p className="text-gray-900 whitespace-no-wrap">
                                          {index + 1}
                                       </p>
                                    </td>
                                    <td className='py-2'>
                                       <p className="text-gray-900 whitespace-no-wrap">{item.title}</p>
                                    </td>
                                    <td className='py-2'>
                                       <p className="text-gray-900 whitespace-no-wrap">
                                          {item.description}
                                       </p>
                                    </td>
                                    <td className='py-2'>
                                       <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                          <button
                                             type="button"
                                             className="hover:bg-red-900 bg-red-700 rounded-md hover:rounded-md px-4 py-1 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                             onClick={() => handleDelete(index)}>
                                             Delete
                                          </button>
                                          <button
                                             type="button"
                                             className="ml-1 hover:bg-blue-700 bg-blue-600 rounded-md hover:rounded-md px-4 py-1 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                             onClick={() => handleEdit(index)} >
                                             Edit
                                          </button>
                                       </span>
                                    </td>
                                 </tr>)
                           })}

                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Table;