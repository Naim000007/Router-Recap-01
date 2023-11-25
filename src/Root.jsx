import React from 'react'
import Header from './Componant/Header/Header'
import Footer from './Componant/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Header></Header>
    <Outlet />
    <Footer/>
    </>
    
  )
}

export default Root
