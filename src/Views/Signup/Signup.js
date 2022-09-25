import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import NewContext from "../../Context";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const {
    visibilityToggle,
    setVisibilityToggle,
    signupHandler,
    setName,
    setMobile,
    setEmail,
    setPassword,
  } = useContext(NewContext);
  return (
    <>
    {/* MAIN CONTAINER */}
      <div className="h-screen bg-slate-600 p-3 flex flex-col justify-center items-center">
        {/* LOGO CONTAINER */}
        <div className="bg-white p-4 text-slate-600 flex flex-col justify-center items-center rounded-xl w-fit">
          <p className="text-6xl">friends book</p>
          <p className="text-xl">Let's Capture, Share & Connect</p>
        </div>
        {/* LOGO CONTAINER */}

        {/* SIGNUP FORM CONTAINER */}
        <div className="w-1/3 bg-white rounded-xl p-6 mt-4">
          {/* NAME FIELD */}
          <div className="mt-7">
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* MOBILE NUMBER FIELD */}
          <div className="mt-7">
            <TextField
              id="outlined-basic"
              label="Enter Mobile Number"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          {/* EMAIL FIELD */}
          <div className="mt-7">
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* PASSWORD FILED */}
          <div className="mt-7">
            <TextField
              id="outlined-password-input"
              type={visibilityToggle ? "password" : "text"}
              autoComplete="current-password"
              label="Enter Password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="relative pl-4 w-fit bottom-10 -right-96">
              {visibilityToggle ? (
                <VisibilityIcon onClick={() => setVisibilityToggle(0)} />
              ) : (
                <VisibilityOffIcon onClick={() => setVisibilityToggle(1)} />
              )}
            </div>
          </div>
          {/* SIGNUP BUTTON */}
          <div className="mt-5 mb-5">
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={signupHandler}
            >
              Sign Up
            </Button>
          </div>
          {/* LOGIN PAGE BUTTON */}
          <div className="mt-5 mb-5">
            <Link to="/">
              <Button variant="contained" fullWidth>
                Go to Login Page !
              </Button>
            </Link>
          </div>
        </div>
        {/* SIGNUP FORM CONTAINER */}
      </div>
    {/* MAIN CONTAINER */}
    </>
  );
};

export default Signup;
