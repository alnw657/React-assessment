import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Event from './components/pages/Event';



function App() {
  return (
    <>
      <Router>
      
        <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/event" element={<Event />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
