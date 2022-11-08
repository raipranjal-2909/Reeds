import React from 'react'
import { Link } from 'react-router-dom'
export default function Main() {
  return (
    <>
    <center>
    <div className="content">
        <img src={require("../bg-image.png")} alt="" />
        <div className="content-info">
          <h1 className='Main-heading'>Let US Acheive ur <br /> Dream Deal! </h1>
          <p className='heading-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Esse reiciendis illo tempora aliquam provident debitis.</p>
          <Link to="SignUp"><button>Get Started</button></Link>        

        </div>
    </div>
    </center>
    </>
  )
}
