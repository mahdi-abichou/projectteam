import React, { useState } from "react"
import Login from "./login signup/Login.jsx";
import SignUpc from "./login signup//SignUpc.jsx"
import Home from "./employer UI/Home.jsx";
import SignUpe from "./login signup//SignUpe.jsx";
import HomeEmployer from "./employer UI/HomeEmployer.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import EmployerProfile from "./employer UI/EmployerProfile.jsx";
import Settings from "./employer UI/SettingsEmployer.jsx";
const  App=()=>{
  const[logeduser,setLogeduser]=useState([])
  const getlogged=(e)=>{
    setLogeduser(e)
  }
  
  console.log(logeduser);
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login getlogged={getlogged}/>}></Route>
      <Route path="/SignUpc" element={<SignUpc/>}></Route>
      <Route path="/SignUpe" element={<SignUpe/>}></Route>
      <Route path="/Home/:id" element={<Home/>}></Route>
      <Route path="/HomeEmployer/:id" element={<HomeEmployer logeduser={logeduser}/>}></Route>
      <Route path="/EmployerProfile" element={<EmployerProfile logeduser={logeduser}/>}></Route>
      <Route path="/Settings" element={<Settings logeduser={logeduser}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;