import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PostDiv from "../PostDiv/PostDiv";
import PostShare from "./PostShare";

const Center = () => {
  return (
    <>
      <div
        className="w-[50vw]  absolute left-[25vw] bg-slate-600"
        style={{border: '1px solid black'}}
      >
        {/* SEARCH BAR */}
        <div className="mt-4 flex justify-center">
          <div className="w-[30vw] absolute ">
            <TextField
              className='bg-white rounded-[4px] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]'
              fullWidth
              size="small"
              placeholder="Search Friends, Places, Events, Groups and Tags"
            />
            <div className="relative bottom-9 left-[420px] opacity-[0.5]">
              <span>
                <SearchIcon />
              </span>
            </div>
          </div>
        </div>
        {/* SEARCH BAR */}
        <div className="mt-16 flex justify-center">
          <PostShare/>
        </div>
        <div className="mt-8 flex justify-center">
          <PostDiv/>
        </div>
        <div className="mt-8 flex justify-center">
          <PostDiv/>
        </div>
        <div className="mt-8 flex justify-center">
          <PostDiv/>
        </div>
        <div className="mt-8 flex justify-center">
          <PostDiv/>
        </div>
      </div>
    </>
  );
};

export default Center;
