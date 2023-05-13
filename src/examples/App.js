import About from './components/About/About';
import Coal from './components/Prediction/Coal';
import Home from './components/Home';
import NaturalGas from './components/Prediction/NaturalGas';
import Petroleum from './components/Prediction/Petroleum';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() { 
  
 
  return (
    <>
    <Router>{/* All routes are nested inside it */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/naturalgas' element={<NaturalGas/>} />
      <Route path='/Coal' element={<Coal/>} />
      <Route path='/Petroleum' element={<Petroleum/>} />
    
    </Routes>
    {/* <NaturalGas/> */}
    {/* <Coal/> */}
    {/* <Petroleum/> */}
  {/* <About/> */}
    </Router>
    </>
  );
}
