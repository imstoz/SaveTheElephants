import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import Involved from './components/Involved';
import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <Home />
      <Involved />
      <Footer />
    </Router>
  );
}

export default App;
