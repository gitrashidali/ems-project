import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Hero/Home'
import About from '../components/about/About'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import AddEmp from '../components/addEmp/AddEmp'
import UpdateEmp from '../components/updateEmp/UpdateEmp'

export default function RoutePath() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/addEmp' element={<AddEmp />} />
                <Route path='/updateEmp' element={<UpdateEmp />} />
            </Routes>
        </div>
    )
}
