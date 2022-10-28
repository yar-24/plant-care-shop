import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import AppBar from '../components/AppBar'
import Header from '../components/Header'
import Home from './Home'


const Navigation = () => {
  return (
    <>
        {/* <AppBar/> */}
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
    </>
  )
}

export default Navigation