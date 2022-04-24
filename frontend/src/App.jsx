import React from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Login from "./page/Login";
import Register from "./page/Register";
import Cart from "./page/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
    
  )
}

export default App
