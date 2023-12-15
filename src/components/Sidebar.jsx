import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
   return (
      <>
         {/* <!--NAV start--> */}
         <ul className="text-gray-700">
            <NavLink to="/">
               <li className="block cursor-pointer p-2 bg-gray-300 hover:text-gray-600 bg-gray rounded-r-md text-center rounded-l-md mx-2 mt-3">
                  {/* <i className="w-8 fas fa-search p-2 bg-gray-500 rounded-full mx-2"></i> */}
                  User Master
               </li>
            </NavLink>
            <NavLink to="/getTask">
               <li className="block cursor-pointer p-2 bg-gray-300 hover:text-gray-600 bg-gray rounded-r-md text-center rounded-l-md mx-2 mt-3">
                  Task Master
               </li>
            </NavLink>
         </ul>
         {/* <!--NAV end--> */}
      </>
   )
} 