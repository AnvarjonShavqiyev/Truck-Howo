import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SingleCategory from '../pages/SingleCategory/SingleCategory'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:name' element={<SingleCategory/>}/>
    </Routes>
  )
}

export default index