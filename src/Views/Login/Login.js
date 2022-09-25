import React, { useContext } from 'react'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import NewContext from '../../Context'

const Login = () => {
  const { visibilityToggle, setVisibilityToggle, loginStatus, setLoginMobile, setLoginPassword, loginHandler } = useContext(NewContext);

  var path = '/dashboard';
  var navigate = useNavigate();
  if(loginStatus === "Success"){
    navigate(path);
  }
  return (
    <div className='flex bg-slate-600'>
    {/* LOGO CONTAINER */}
      <div className='w-1/2 h-screen flex justify-center items-center'>
        <div className='h-28 text-slate-600 bg-white rounded-2xl p-3 flex flex-col justify-center items-center'>
          <p className='text-6xl'>friends book</p>
          <p className='text-xl'>Let's Capture, Share & Connect</p>
        </div>
      </div>
    {/* LOGO CONTAINER */}

    {/* LOGIN CONTAINER */}
      <div className='w-1/2 h-screen flex justify-center items-center loginContainer'>
          <div className='w-1/2 bg-white p-4 rounded-2xl ' >
            <div className='mt-5'>
              <TextField id="outlined-basic" label="Enter Mobile Number" variant="outlined" fullWidth
                inputProps={{maxLength: 10}}
                onChange={(e) => setLoginMobile(e.target.value)}
              />
            </div>
            <div className='mt-5'>
              <TextField id="outlined-password-input" type={visibilityToggle ? "password" : "text"} autoComplete="current-password"
                label="Enter Password" fullWidth onChange={(e) => setLoginPassword(e.target.value)}/>
                <div className='relative pl-4 w-fit bottom-10 left-72'>
                  {visibilityToggle ? <VisibilityIcon onClick={() => setVisibilityToggle(0)}/> : 
                    <VisibilityOffIcon onClick={() => setVisibilityToggle(1)}/>}
                </div>
            </div>
            {/* <div className='ml-3 text-red-500'>
              <p className=''>{error}</p>
            </div> */}
            <div className='mt-5'>
              <Button variant='contained' fullWidth onClick={loginHandler}>Login</Button>
            </div>
            <div className='mt-5'>
              <Button variant='text' fullWidth>Forget Password?</Button>
            </div>
            <div className='mt-4'>
              <hr />
            </div>
            <div className='mt-7 mb-5 flex justify-center'>
              <Link to='/signup'><Button variant='contained' color='success' >Create New Account</Button></Link>
            </div>
          </div>
      </div>
    {/* LOGIN CONTAINER */}
    </div>
  )
}

export default Login