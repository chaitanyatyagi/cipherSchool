import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './component/Login';
import Register from "./component/Register"
import ForgetPassword from './component/ForgetPassword';
import ResetPassword from './component/ResetPassword';
import Profile from "./component/Profile"
import Follow from "./component/Follow"
import Interest from './component/Interest';
import Cookies from "universal-cookie"
import { useState, useEffect } from 'react';
import Password from './component/Password';
import axios from 'axios';

function App() {
  const cookie = new Cookies()
  const [login, setLogin] = useState(false)
  const [id, setId] = useState(null)

  useEffect(() => {
    const token = cookie.get("jwt")
    setId(cookie.get("id"))
    if (token) {
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile login={login} id={id} />} />
          <Route path="/followers" element={<Follow id={id} login={login} />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
