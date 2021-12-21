import React, {createContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import {usersDb} from "./api/users";
import Header from './components/Header/Header';
import Home from './pages/Home';
import CoffeeMachines from './pages/CoffeeMachines';
import CoffeeMachineDescription from "./pages/CoffeeMachineDescription";
import UserPage from "./pages/UserPage";
import Login from "./components/Login/Login";
import NotFound from './components/NotFound';

export const AuthContext = createContext(null);

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
      localStorage.setItem('users', JSON.stringify(usersDb))

      if (localStorage.getItem('isAuth')) {
          setIsAuth(true)
      }

  }, [])
  function login() {
    localStorage.setItem('isAuth', 'true')
    setIsAuth(true)
}

function logout() {
    localStorage.removeItem('isAuth')
    setIsAuth(false)
}

const context = {isAuth, setIsAuth, login, logout}


  return (
    <AuthContext.Provider value={context}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="coffeemachines" element={<CoffeeMachineLayout />} >
              <Route index element={<CoffeeMachines />} />
              <Route path=":name" element={<CoffeeMachineDescription />} />
              </Route>
            <Route path="profile" element={<UserPage/>} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      </AuthContext.Provider>
  )
}




export default App;

const CoffeeMachineLayout = () => {
  return (
    <Outlet />
  )
}

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}