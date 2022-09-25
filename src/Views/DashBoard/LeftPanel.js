import React from 'react'
import { Button } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import GamesIcon from '@mui/icons-material/Games';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import NewContext from '../../Context';

const LeftPanel = () => {
    const { userInfo } = useContext(NewContext);
  return (
    <>
        <div className='w-[25vw] h-screen p-4 fixed left-0 bg-slate-600' >
            <div>
                <div className='p-4 flex flex-col justify-center items-center bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-2xl'>
                    <div>
                        <img className='h-[80px] w-[80px] rounded-full' 
                            src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' 
                            alt="Profile" />
                    </div>
                    <div>
                        <h1 className='p-1 text-2xl'>{userInfo.name}</h1>
                    </div>
                    <div>
                        <p className='text-sm text-center p-4'>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Incidunt, odit?</p>
                    </div>
                    <div className='flex justify-around w-full'>
                        <div>
                            <p className='border-4 rounded-full flex justify-center'>999</p>
                            <p>Followers</p>
                        </div>
                        <div>
                           <p className='border-4 rounded-full flex justify-center'>999</p>
                           <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 p-4 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-2xl'>
                <ul className='list-none'>
                    <li className='pl-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl' >
                        <div className='p-2 '>
                            <Diversity3Icon/> <span className='pl-4'>Friends</span>
                        </div>
                    </li>
                    <li className='pl-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl'>
                        <div className='p-2'>
                            <StorefrontIcon/> <span className='pl-4'>Market Place</span>
                        </div>
                    </li>
                    <li className='pl-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl'>
                        <div className='p-2'>
                            <BookmarkIcon/> <span className='pl-4'>Saved</span>
                        </div>
                    </li>
                    <li className='pl-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl'>
                        <div className='p-2'>
                            <EventIcon/> <span className='pl-4'>Events</span>
                        </div>
                    </li>
                    <li className='pl-2 border-2 mb-2 hover:bg-slate-600 hover:text-white rounded-xl'>
                        <div className='p-2'>
                            <MessageIcon/> <span className='pl-4'>Messenger</span>
                        </div>
                    </li>
                    <li className='pl-2 border-2 hover:bg-slate-600 hover:text-white rounded-xl'>
                        <div className='p-2'>
                            <GamesIcon/> <span className='pl-4'>Games </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='mt-3 '>
                <Link to='/'><Button variant='contained' style={{backgroundColor: "white", color: 'red'}} fullWidth>Log Out</Button></Link>
            </div>
        </div>
    </>
  )
}

export default LeftPanel