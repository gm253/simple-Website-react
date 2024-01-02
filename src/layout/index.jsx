import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
// import Headers from '../components/Headers';
import Sidebar from '../components/Sidebar';
import Table from '../components/TableList/Table';
import AddOrEditTask from '../pages/Task/TaskEditOrAdd';

function Dashboard() {
  useEffect(async() => {
    let data = await Axios.get('http://localhost:8080/api/')
    console.log(data);
    return 
  }, [])
  return (
    <>
      <p className='text-gray-light'>Dashboard</p>
    </>
  );
}

function Layout() {
  return (
    <Router>
      {/* <Headers /> */}
      <div className='flex'>
        <div className='columns-1 w-80 bg-gray-800 min-h-screen'>
          <Sidebar />
        </div>
        <div className='w-full bg-gray-200 h-screen'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/getTask" element={<Table />} />
            <Route path="/AddOrEditTask" element={<AddOrEditTask />} />
            <Route path="/AddOrEditTask/:id" element={<AddOrEditTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
