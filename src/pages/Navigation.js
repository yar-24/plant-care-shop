import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import AppBar from '../components/AppBar'
import Header from '../components/Header'
import Register from '../components/Register'
import Services from '../components/Services'
import Home from './Home'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'


const Navigation = () => {
  return (
    <>
        {/* <AppBar/> */}
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Services/>} path="/services"/>
            <Route element={<ForgotPassword/>} path="/forgot-password"/>

        </Routes>
    </>
  )
}

export default Navigation