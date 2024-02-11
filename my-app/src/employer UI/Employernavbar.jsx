import React, { useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';

const Nav = ({logeduser}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");





  return (
    <>
      <nav className="sticky top-0 z-50 w-full dark:bg-green-500 border-b border-white-200 dark:bg-white-800 dark:border-white-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600 dark:bg-green- dark:border-green-900 dark:text-green-500"
              />

 
            </div>  
            <Link to={`/HomeEmployer/${logeduser[0].idemployer}`} className="text-2xl font-semibold mb-4">
              Job Requests
      
            </Link>
            <div className="flex items-center">
              <div className="relative">
                <button
                  type="button"
                  onClick={()=>setDropdownOpen(!isDropdownOpen)}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen}
                >
  
                  <img
                    className="w-8 h-8 rounded-full"
                    src={logeduser[0].imagee}
                    alt="user photo"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 dark:text-white">
                      {logeduser[0].namee} {logeduser[0].lastnamee}
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        {logeduser[0].emaile}
                      </p>
                    </div>
                    <ul className="py-1">
                    <li>
                    
                          <Link to="/EmployerProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                            Profile
                           </Link>
                    
                    
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <Link to="/Settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                            Setting
                           </Link>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
