import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Shop, PlantCare, Services } from '../pages'
import Header from '../components/Header'


const Navigation = () => {
  return (
    <>
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
        <Routes>
            <Route element={<Shop/>} path="/shop"/>
        </Routes>
        <Routes>
            <Route element={<PlantCare/>} path="/plant-care"/>
        </Routes>
        <Routes>
            <Route element={<Services/>} path="/services"/>
        </Routes>
        <Routes>
            <Route element={<Login/>} path="/login"/>
        </Routes>
    </>
  )
}

export default Navigation