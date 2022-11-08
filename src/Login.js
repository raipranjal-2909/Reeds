import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./signup.css";
import { useNavigate } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'; 
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import {Logo} from "./log.svg";
export default function SignUp() {
  const navigate = useNavigate();
  const [logindata, setlogindata] = useState({
    email: "",
    passWord: "",
  });
  function handleChange(event) {
    // console.log(event)
    const { name, value } = event.target;
    // console.log(logindata.event.target.value)
    setlogindata(previousdata => {
      return {
        ...previousdata,
        [name]: value
      }
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(logindata);
    navigate("/ ");

  }
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Log in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" 
                placeholder="Email"
                name="email"
                value={logindata.email}
                onChange={handleChange}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" 
                placeholder="Password" 
                name="passWord"
                onChange={handleChange}
                value={logindata.passWord}/>
              </div>
              <input type="submit" value="Login" className="btn solid" onClick={handleSubmit} />
              {/* <p className="social-text">Or Sign in with social platforms</p> */}
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn"><Link to="/SignUp">SignUp</Link></button>
            </div>
            {/* <Logo /> */}
            {/* <img src="img/log.svg" className="image" alt="" /> */}
          </div>
         
        </div>
      </div>

      {/* //     <div classNameName="SignUp-Box">
    //         <h2>Login</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div classNameName="email-box user-box">
    //               <input type="text" 
    //               onChange={handleChange}
    //               name="email"
    //               value={logindata.email}/>
    //               <label>Email</label>
    //             </div>
    //             <div classNameName="password-box user-box" style={{width:"100%"}}>
    //               <input type="text" 
    //               classNameName='Password'
    //               onChange={handleChange}
    //               name="password"
    //               value={logindata.passWord}/>
    //               <label>Password</label>
    //             </div>
    //             <div classNameName="button-form">
    //               <button classNameName='register-button'>Register</button>
    //               <div classNameName="login-redirect">
    //                 Don't Have an account?
    //                 <Link classNameName="link" to="/SignUp">  SIGN UP</Link>                
    //               </div>
    //             </div>
    //         </form>
    //     </div> */}
    </>
  )
}
