import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import CoffeeMachines from './pages/CoffeeMachines';
import NotFound from './components/NotFound';
import Registration from './pages/Registration';

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="coffeemachines" element={<CoffeeMachines />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App;

const Layout = () => {
  return (
    <div className='App'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  )
}