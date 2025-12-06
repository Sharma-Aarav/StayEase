import React from 'react'
import Navbar from './components/Navbar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
const App = () => {

  const inOwnerPath= useLocation().pathname.includes('owner');

  return (
    <div>
      {!inOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
