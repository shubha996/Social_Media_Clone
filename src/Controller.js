import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Views/Login/Login'
import Signup from './Views/Signup/Signup'
import NewContext from './Context'

const Controller = () => {
  const [error, setError] = useState("");
  const [visibilityToggle, setVisibilityToggle] = useState(1);
  const [newUserData, setNewUserData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });
  console.log(newUserData);
  return (
    <>
        <NewContext.Provider value = {{visibilityToggle, setVisibilityToggle, error, newUserData, setNewUserData}}
        >
          <Router>
            <Routes>
                <Route path='/login' element = { <Login/> }/>
                <Route path='/signup' element = { <Signup/> }/>
            </Routes>
        </Router>
        </NewContext.Provider>
    </>
  )
}

export default Controller