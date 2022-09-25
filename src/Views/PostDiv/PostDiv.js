import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Content from './Content'

const PostDiv = () => {
  return (
    <div className='w-[40vw] rounded-2xl bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)]' >
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default PostDiv