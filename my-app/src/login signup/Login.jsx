import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Nav from '../employer UI/Employernavbar.jsx';
const Login = ({getlogged}) => {
  const [emailc, setEmailc] = useState('');
  const [passwordc, setPasswordc] = useState('');
  const [logeduser,setLogeduser]=useState([])
  console.log(logeduser);
  const navigate=useNavigate()
  const LoginClient = () => {
    const obj = { email: emailc, password: passwordc };
    axios.post('http://localhost:8080/SignInc', obj)
      .then(res => {
        console.log(res.data);
        if (res.data.length > 0) {

          setLogeduser(res.data[0])
          navigate(`/Home/${res.data[0].idclient}`);
          console.log(res.data[0]);
          // Redirect to Home page
          
        } 
        else  {
            axios.post('http://localhost:8080/SignIne',obj)
            .then((res)=>{console.log(res.data);
              if (res.data.length > 0) {
                getlogged(res.data)
                navigate(`/HomeEmployer/${res.data[0].idemployer}`);
                console.log(res.data);
                // Redirect to Home page
              } })
        }
      })
      .catch(err => console.log("Error in Login", err));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required=""
              onChange={(e) => setEmailc(e.target.value)}
            />
            <span className='text-danger text-red-500'></span>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
              onChange={(e) => setPasswordc(e.target.value)}
            />
            <span className='text-danger text-red-500'></span>
          </div>
          <button
            type="button" 
            className="w-full text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={LoginClient} 
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link to="/SignUpe" className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
