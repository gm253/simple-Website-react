import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Headers from '../components/Headers';
import Sidebar from '../components/Sidebar';
import Table from '../components/TableList/Table';
import AddOrEditTask from '../pages/Task/TaskEditOrAdd';
import TaskList from '../pages/Task/TaskList';
import UsersEditOrAdd from '../pages/Users/UsersEditOrAdd';
import UserList from '../pages/Users/UserList';
import Axios from 'axios';


function Dashboard() {
  useEffect(() => {
    Axios.get('http://localhost:8080/api/').then((res) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      // return res.json();
    })
  }, []);
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
            {/* Task Master */}
            <Route path="/getTask" element={<TaskList />} />
            <Route path="/AddOrEditTask" element={<AddOrEditTask />} />
            <Route path="/AddOrEditTask/:id" element={<AddOrEditTask />} />

            {/* User Master */}
            <Route path="/getUser" element={<UserList />} />
            <Route path="/AddOrEditUser" element={<UsersEditOrAdd />} />
            <Route path="/AddOrEditUser/:id" element={<UsersEditOrAdd />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
