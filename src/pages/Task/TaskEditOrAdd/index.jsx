import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskEditOrAdd = () => {
   const [taskData, setTaskData] = useState({ title: "", description: "" });
   const [taskList, setTaskList] = useState([]);
   const { id } = useParams();
   const navigate = useNavigate();

   const itemHandler = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      setTaskData((prevValue) => ({
         ...prevValue,
         [name]: value
      }));
   };

   const saveTask = () => {
      const updatedTaskList = id ? taskList.map((item, index) => (index === +id ? taskData : item))
         : [...taskList, taskData];

      setTaskList(updatedTaskList);
      localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
      navigate('/getTask');
   };

   useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('taskList'));

      if (id && storedData) {
         const selectedTask = storedData[+id];
         setTaskData(selectedTask);
      }

      if (storedData) {
         setTaskList(storedData);
      }
   }, [id]);

   return (
      <div className='mx-60 mt-10'>
         <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input
               type="text"
               name='title'
               id='title'
               value={taskData.title}
               className="bg-gray-50 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Task title"
               onChange={itemHandler}
            />
         </div>
         <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 mt-5">Description</label>
            <input
               type="text"
               name='description'
               id='description'
               value={taskData.description}
               className="bg-gray-50 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Task Description"
               onChange={itemHandler}
            />
         </div>
         <button
            onClick={saveTask}
            type="button"
            className="hover:bg-gray-900 bg-gray-600 mb-4 rounded-md hover:rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-5"
         >
            Save Task
         </button>
      </div>
   );
};

export default TaskEditOrAdd;
