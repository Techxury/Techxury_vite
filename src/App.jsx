import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// components links
import Navbar from './components/Navbar'
import Main from './pages/Main/Main'
import Courses from './pages/Coursesfl/Courses'
import Footer from './components/Footer'
import Profile_se from './pages/Profile/Profile_se'
import Identity from './pages/Profile/Identity'
import group from './pages/Profile/Group'
import Mycourses from './pages/Profile/Mycourses'
import setting from './pages/Profile/Setting'
import Header from './components/Header'
import Login from './pages/Login'
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
         </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
