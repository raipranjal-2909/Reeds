import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SineUp from './SignUp';
import Login from "./Login";
import Home from "./Home";
import Deals from "./Deals";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SignUp" element={<SineUp />} />
            <Route path="Login" element={<Login />} />
            <Route path="Deals" element={<Deals />} />
        </Routes>
    </BrowserRouter>
  )
  
}
