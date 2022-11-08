import React from 'react'
import { FaInstagram,FaFacebook, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
        <p className='copyright'>&#169; Prateek and Company 2022</p>
        
        <FaFacebook />
        <FaInstagram />
        <FaDiscord />
    </div>
  )
}
