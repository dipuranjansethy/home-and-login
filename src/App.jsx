import React from 'react'
import Home from './Home'
import { Routes,Route,Navigate } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar'
import LoginForm from './login'


const App = () => {
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/login" Component={LoginForm}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      
      
    </>
  )
}

export default App