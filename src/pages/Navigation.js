import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AppBar from '../components/AppBar'
import Home from './Home'


const Navigation = () => {
  return (
    <>
        <AppBar/>
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
    </>
  )
}

export default Navigation