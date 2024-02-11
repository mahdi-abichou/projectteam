import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Employernavbar.jsx';

const Settings = ({ logeduser }) => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const ChangePass = () => {
    axios.put(`http://localhost:8080/updatetheemployer/${logeduser[0].idemployer}`, { passworde:newPassword })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occurred while updating ');
      });
  };
  const changemail=()=>{
    axios.put(`http://localhost:8080/updatetheemployer/${logeduser[0].idemployer}`, { emaile:newEmail })
      .then((res) => {
        setMessage(res.data.message);
        
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occurred while updating ');
      });
  };
  



  return (
    <>
      <Nav logeduser={logeduser} />
      <div className="mt-20 bg-white dark:bg-gray-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white dark:bg-green-500 text-gray-800 dark:text-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">New Email</label>
              <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="New Email" />
            </div>
            <button onClick={changemail} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Change Email
            </button>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="New Password" />
            </div>
            <button onClick={ChangePass} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mt-4 rounded">
              Change Password
            </button>
            {message && <p className="mt-4 text-green-700">{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
