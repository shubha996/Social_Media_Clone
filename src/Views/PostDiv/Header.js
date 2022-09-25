import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-between p-4'>
          <div className='flex'>
            <div className='h-fit w-fit p-[1px] rounded-full border-2'>
              <img className='h-10 rounded-full' src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt="" />
            </div>
            <div className='pl-4'>
              <p>Shubham Gawai</p>
              <p className='text-[10px]'>Raipur, Chhattisgarh</p>
            </div>
          </div>
          <div className='flex text-slate-600 justify-center items-center rounded-full h-1/2 bg-white hover:bg-slate-600 hover:text-white' >
            <MoreVertIcon />
          </div>
        </div>
    </div>
  )
}

export default Header