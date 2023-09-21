import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Cart , Home} from "./../pages/index"
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
    </Routes>
  )
}
