import React from 'react'
import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/Doctordetails"

import { Routes,Route } from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctors/:id" element={<DoctorDetails/>} />
  </Routes>
}

export default Routers