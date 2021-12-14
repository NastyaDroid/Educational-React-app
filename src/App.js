import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import CoffeeMachines from './pages/CoffeeMachines';
import NotFound from './components/NotFound';
import Registration from './pages/Registration';

const App = () => {

  return (
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeemachines" element={<CoffeeMachines />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
  )
}



export default App;
