import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <h1>CRUD Using Hooks with Bootstrap</h1>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      </Router>
    </div>
  );
}

export default App;
