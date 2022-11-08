import React,{useState} from 'react';
import {Link} from "react-router-dom";
// import "./style.css";

export default function SignUp() {
  const [logindata,setlogindata] = useState({
    email:"",
    passWord:"",
  });
  function handleChange(event){
    console.log(event)
    const {name,value} = event.target;
    // console.log(logindata.event.target.value)
    setlogindata(previousdata=>{
      return{
        ...previousdata,
        [name]:value
      }
  });
  };
  function handleSubmit(event){
    event.preventDefault();
    console.log(logindata);

  }
  return (
    <>
        <div className="SignUp-Box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="email-box user-box">
                  <input type="text" 
                  onChange={handleChange}
                  name="email"
                  value={logindata.email}/>
                  <label>Email</label>
                </div>
                <div className="password-box user-box" style={{width:"100%"}}>
                  <input type="text" 
                  className='Password'
                  onChange={handleChange}
                  name="password"
                  value={logindata.passWord}/>
                  <label>Password</label>
                </div>
                <div className="button-form">
                  <button className='register-button'>Register</button>
                  <div className="login-redirect">
                    Don't Have an account?
                    <Link className="link" to="/SignUp">  SIGN UP</Link>                
                  </div>
                </div>
            </form>
        </div>
    </>
  )
}
