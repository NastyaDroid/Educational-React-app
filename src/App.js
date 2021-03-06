import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { CartContextProvider } from "./CartContext";
import { AuthContextProvider } from "./AuthContext";
import Header from './components/Header/Header';
import Home from './pages/Home';
import CoffeeMachines from './pages/CoffeeMachines';
import CoffeeMachineDescription from "./pages/CoffeeMachineDescription";
import UserPage from "./pages/UserPage";
import Login from "./components/Login/Login";
import NotFound from './components/NotFound';
import Cart from "./components/Cart/Cart";
import Grinders from "./pages/Grinders";
import GrinderDescription from "./pages/GrinderDescription";


const App = () => {
  
  return (
    <CartContextProvider>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="coffeemachines" element={<CoffeeMachineLayout />} >
              <Route index element={<CoffeeMachines />} />
              <Route path=":name" element={<CoffeeMachineDescription />} />
              </Route>
              <Route path="grinders" element={<GrinderLayout />} >
                <Route index element={<Grinders />} />
                <Route path=":name" element={<GrinderDescription />} />
              </Route>
            <Route path="profile" element={<UserPage/>} />
            <Route path="profileCart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      </AuthContextProvider>
      </CartContextProvider>
  )
}




export default App;

const GrinderLayout = () => {
  return (
    <Outlet />
  )
}

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