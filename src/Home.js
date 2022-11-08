import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from  "./components/Navbar";
import Main from './components/Main';
import Footer from './components/Footer';

import "./LandingPage.css";
export default function Home() {
  return (
    <>
    <div className="LandingPage">
        <Navbar />
        <Main />
        <Footer />
    </div>
    </>
  )
}
