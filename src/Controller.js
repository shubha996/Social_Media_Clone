import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Views/Login/Login'
import Signup from './Views/Signup/Signup'
import NewContext from './Context'
import axios from 'axios'
import DashBoard from './Views/DashBoard/DashBoard'
import Birthday from './Views/Birthday/Birthday'

const Controller = () => {
  const [visibilityToggle, setVisibilityToggle] = useState(1);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState('');
  const [loginMobile, setLoginMobile] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: ''
  })

  const usersData = {
    name: name,
    mobile: mobile,
    email: email,
    password: password
  }

  const signupHandler = () => {
    axios.post('http://localhost:4000/login/signup', usersData)
      .then(data => {
        setSignupStatus(data.data.queryMessage);
        window.alert(signupStatus);
        setEmail("");
        setMobile("");
        setName("");
        setPassword("");
      })  
      .catch(err => console.log(err))
  }

  const loginData = {
    mobile: loginMobile,
    password: loginPassword
  };
  console.log(loginData);

  const loginHandler = () => {
    axios.post('http://localhost:4000/login', loginData)
    .then(data => {
      console.log(data)
      if(data.data.length === 2){
        setLoginStatus("Success");
        setUserInfo({name: data.data[0].user_name});
      }else{
        alert("Invalid Login Details")
      }
      setLoginMobile("");
      setLoginPassword("");
    })
    .catch(err => console.log(err));
  }
  return (
    <>
        <NewContext.Provider value = {{visibilityToggle, setVisibilityToggle, setName, setMobile, setEmail, setPassword, 
          signupHandler, signupStatus,userInfo, setLoginPassword, loginStatus, setLoginMobile, loginHandler}}
        >
          <Router>
            <Routes>
                <Route path='/' element = { <Login/> }/>
                <Route path='/signup' element = { <Signup/> }/>
                <Route path='/dashboard' element = { <DashBoard/> }/>
                <Route path='/birthday' element = { <Birthday/> }/>
            </Routes>
        </Router>
        </NewContext.Provider>
    </>
  )
}

export default Controller