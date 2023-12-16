import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const TableBodyRow = ({ item, index, handleDelete, handleEdit }) => (
   <tr className="tbl-tr" key={index}>
      <td className="tbl-td">{index + 1}</td>
      <td className="tbl-td">{item.title}</td>
      <td className="tbl-td">{item.description}</td>
      <td className="tbl-td">{item.user}</td>
      <td className="tbl-td">
         <button
            type="button"
            className="btn-danger"
            onClick={() => handleDelete(index)}>
            Delete
         </button>
         <button
            type="button"
            className="btn-primary"
            onClick={() => handleEdit(index)}>
            Edit
         </button>
      </td>
   </tr>
);

function TaskList() {
   const [taskList, setTaskList] = useState([]);
   const navigate = useNavigate();

   function handleDelete(indexDelete) {
      const filteredData = taskList.filter((item, index) => index !== indexDelete);
      setTaskList(filteredData);
      localStorage.setItem('taskList', JSON.stringify(filteredData));
   };

   function handleEdit(indexEdit) {
      navigate(`/AddOrEditTask/${indexEdit}`);
   };

   useEffect(() => {
      const data = JSON.parse(localStorage.getItem('taskList')) || [];
      setTaskList(data);
   }, []);

   const Headers = ['NO.', 'Title', 'Descriptions', 'Users', 'Actions'];

   return (
      <div className="antialiased font-sans bg-gray-200">
         <div className="mx-auto px-4 sm:px-8 py-8">
            <div>
               <h2 className="text-2xl font-semibold">Task List</h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
               <NavLink to="/AddOrEditTask">
                  <button
                     type="button"
                     className="btn-info float-right mb-3">
                     Add Task
                  </button>
               </NavLink>
               <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                     <thead className="bg-gray">
                        <tr>{Headers.map((item, i) => { return (<th className="tbl-th"> {item}</th>) })}</tr >
                     </thead>
                     <tbody className="bg-gray-light">
                        {taskList.map((item, index) => (
                           <TableBodyRow
                              key={index}
                              item={item}
                              index={index}
                              handleDelete={handleDelete}
                              handleEdit={handleEdit}
                           />
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div >
   );
};

export default TaskList;
