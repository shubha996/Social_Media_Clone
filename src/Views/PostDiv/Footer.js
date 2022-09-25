import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex mb-2 mt-2'>
            <div className='flex justify-evenly w-full'>
                <div className='pl-6 pr-6 p-[2px] bg-slate-200 rounded-[5px] hover:bg-slate-600 hover:text-white hover:cursor-pointer'>
                    Like
                </div>
                <div className='pl-6 pr-6 p-[2px] bg-slate-200 rounded-[5px] hover:bg-slate-600 hover:text-white hover:cursor-pointer'>
                    Comment
                </div>
                <div className='pl-6 pr-6 p-[2px] bg-slate-200 rounded-[5px] hover:bg-slate-600 hover:text-white hover:cursor-pointer'>
                    Share
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer