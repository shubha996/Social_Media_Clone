import React from 'react'
import Center from './Center'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const DashBoard = () => {
  return (
    <>
      <div className='flex'>
        <LeftPanel/>
        <Center/>
        <RightPanel/>
      </div>
    </>
  )
}

export default DashBoard