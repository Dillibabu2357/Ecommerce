import React from 'react'
import './App.css';
import LandingPage from './stores/Pages/LandingPage';
import { Route,Routes } from 'react-router-dom';
import Kitchen from './stores/components/Kitchen';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/kitchen' element={<Kitchen/>} />
      </Routes>
    </div>
  )
}

export default App
