import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// components links
import Navbar from './components/Navbar'
import Main from './pages/Main'
import Courses from './pages/Courses'
import Footer from './components/Footer'
import Profile_se from './pages/Profile/Profile_se'
import Identity from './pages/Profile/Identity'
import group from './pages/Profile/Group'
import Mycourses from './pages/Profile/Mycourses'
import setting from './pages/Profile/Setting'

// comoponents link end 
function App() {
  

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} /> 
          <Route path='/courses' element={<Courses />} /> 
          <Route path='/profile' element={<Identity />} /> 
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
