import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TaskForm from './pages/TaskForm'
import Footer from './layout/Footer'



function App() {
 
  return (
    <>


   

    <BrowserRouter>

     <Navbar/>

     <Routes>
      <Route path="/" element = { <TaskList/>}></Route>
      <Route path="/addTask" element = { <TaskForm/>}></Route>
      <Route path="/updateTask/:id" element = { <TaskForm/>}></Route>
     </Routes>

     <Footer/>

     
    </BrowserRouter>
  
      
    </>
  )
}

export default App
