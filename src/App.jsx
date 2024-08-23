// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/Components/Home'
import ScanQr from './assets/Components/ScanQr';
import GeneQr from './assets/Components/GeneQr';


function App() {
  

  return (
    <>
    
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanqr" element={<ScanQr />} />
        <Route path="/geneqr" element={<GeneQr />} />
      </Routes>
    </Router>
   
    </>
  )
}

export default App
