import React from 'react'
import { FaInstagram,FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="sec-footer">
      <div className="footer">
        <div className="social-icons">
          <FaGithub className='icon'/>
          <FaGithub className='icon' />
          <FaGithub className='icon'/>
          <p className='copyright'>&#169; Reeds</p>
        </div>
      </div>
    </div>
  )
}
