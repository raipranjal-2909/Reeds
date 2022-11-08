import React,{useState} from 'react';
import {Link} from "react-router-dom";
import "./style.css";
export default function SignUp() {
  const [signupData,setSignupdata] = useState({
    username:"",
    passWord:"",
    confirmPassWord:"",
    email:"",
    contact:"",
    aadaharNom:"",
    pan:""
  });
  function handleChange(event){
    console.log(event)
    const {name,value} = event.target;
    // console.log(signupData.event.target.value)
    setSignupdata(previousdata=>{
      return{
        ...previousdata,
        [name]:value
      }
  });
  };
  function handleSubmit(event){
    event.preventDefault();
    console.log(signupData);

  }
  return (
    <>
    <div className="signupbody">
      <div className="SignUp-Box container" >
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>
              <div className="username-box user-box">
                <input type="text" 
                className='Username' 
                onChange={handleChange}
                name="username"
                value={signupData.username}/>
                <label>Username</label>
              </div>
              <div className="email user-box">
                <input type="text" 
                onChange={handleChange}
                name="email"
                value={signupData.email}/>
                <label>Email</label>
              </div>
              <div className="password-box user-box">
                <input type="text" 
                className='Password'
                onChange={handleChange}
                name="password"
                value={signupData.passWord}/>
                <label>Password</label>
              </div>
              <div className="confirmPassWord-box user-box">
                <input type="text" 
                className=''
                onChange={handleChange}
                name="confirmPassWord"
                value={signupData.confirmPassWord}/>
                <label>Confirm Password</label>
              </div>
              <div className="phone-box user-box">
                <input type="text" 
                name='contact'
                onChange={handleChange}
                value={signupData.contact}/>
                <label >Contact No:</label>
              </div>
              <div className="AadharNom-box user-box">
                <input type="text"
                value={signupData.aadaharNom}
                name="aadharNom"
                onChange={handleChange}/>
                <label>Aadhar No:</label>
              </div>
              <div className="pan-box user-box">
                <input type="text"
                name="pan"
                value={signupData.pan} 
                onChange={handleChange}/>
                <label>PAN No:</label>
              </div>
              <div className="button-form">
                <button className='register-button'>Register</button>
                <div className="login-redirect">
                  Already a member?<br></br>
                  <Link className="link" to="/Login"> LOGIN</Link>                
                </div>
              </div>
          </form>
      </div>
    </div>
    </>
  )
}
