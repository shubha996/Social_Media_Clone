import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import NewContext from "../../Context";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const { visibilityToggle, setVisibilityToggle, newUserData, setNewUserData } = useContext(NewContext);
  return (
    <>
      <div className="h-screen bg-slate-600 p-3 flex flex-col justify-center items-center">
        <div className="bg-white p-4 text-slate-600 flex flex-col justify-center items-center rounded-xl w-fit">
          <p className="text-6xl">friends book</p>
          <p className="text-xl">Let's Capture, Share & Connect</p>
        </div>

        <div className="w-1/3 bg-white rounded-xl p-6 mt-4">
          <div className="mt-7">
            <TextField id="outlined-basic" label="Enter Your Name" fullWidth 
            onChange={(e) => setNewUserData({name: e.target.value})}/>
          </div>
          <div className="mt-7">
            <TextField
              id="outlined-basic"
              label="Enter Mobile Number"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(e) => setNewUserData({mobile: e.target.value})}
            />
          </div>
          <div className="mt-7">
            <TextField id="outlined-basic" label="Enter Your Email" fullWidth 
              onChange={(e) => setNewUserData({email: e.target.value})}
            />
          </div>
          <div className="mt-7">
            <TextField
              id="outlined-password-input"
              type={visibilityToggle ? "password" : "text"}
              autoComplete="current-password"
              label="Enter Password"
              fullWidth
              onChange={(e) => setNewUserData({password: e.target.value})}
            />
            <div className='relative pl-4 w-fit bottom-10 -right-96' >
              {visibilityToggle ? (
                <VisibilityIcon onClick={() => setVisibilityToggle(0)} />
              ) : (
                <VisibilityOffIcon onClick={() => setVisibilityToggle(1)} />
              )}
            </div>
            <div className="mt-5 mb-5">
              <Button variant="contained" color="success" fullWidth>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
