import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Shop, PlantCare, Services, Register, ForgotPassword } from '../pages'
import Header from '../components/Header'


const Navigation = () => {
  return (
    <>
         <Header/>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Services/>} path="/services"/>
            <Route element={<PlantCare/>} path="/plant-care"/>
            <Route element={<Shop/>} path="/shop"/>
            <Route element={<ForgotPassword/>} path="/forgot-password"/>

        </Routes>
    </>
  )
}

export default Navigation