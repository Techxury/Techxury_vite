import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState  } from 'react'


// components links

import Main from './pages/Main/Main'
import Courses from './pages/Coursesfl/Courses'
import Footer from './components/Footer'
import Profile_se from './pages/Profile/Profile_se'
import Identity from './pages/Profile/Identity'
import group from './pages/Profile/Group'
import Mycourses from './pages/Profile/Mycourses'
import setting from './pages/Profile/Setting'
import Header from './components/Header'
import Login from './pages/Login/Login'
import Otp from './pages/Login/Otp'
import About from './pages/About/About'
// comoponents link end 
function App() {

 

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/profile' element={<Identity />} />
          <Route path='/login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/login/Otp' element={<Otp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
