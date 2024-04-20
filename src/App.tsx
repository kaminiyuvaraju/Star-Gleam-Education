import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';
import NonVerbal from './Components/NonVerbal';
import Verbal from './Components/Verbal';
import English from './Components/English';
import MathComponent from './Components/Math'; 
import Contact from './Components/Contact';

import './App.css'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/maths" element={<MathComponent />} />
            <Route path="/english" element={<English />} />
            <Route path="/verbal" element={<Verbal />} />
            <Route path="/nonverbal" element={<NonVerbal />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/" element={<Carousel />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
