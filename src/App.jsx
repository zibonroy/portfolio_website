import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { div } from 'framer-motion/client'
import Navber from './components/Navber';


function App() {
  return (
    <div>
     {/* Mount the Navber & Home files */}
      <Navber/>
       <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>
    </div>  
    )
}

export default App