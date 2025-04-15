import React from 'react';
import { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './login.css'

 const LoginRegister = () =>{

  const [action, setAction] = useState('');

  const registerLink = () =>{
    setAction('active');
  };

  const loginLink = () =>{
    setAction('');
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box Login">
        <form>
          <h1>LOGIN</h1>
          <div className='inputBox'>
            <input type="text"
                     placeholder="Username" />
                     <FaUser className='icons'/>
          </div>
          <div className='inputBox'>
            <input  type="password"
                     placeholder="password" />
                     <FaLock className='icons'/>
          </div>
          <div className='remember-forgot'>
            <label><input type="checkbox"
                    />Remember Me</label>
                    <a href="#">  forgot password</a>
          </div>

          <button type='submit'>Login</button>
        
          <div className='Register-link'>
            <p>Don't have an account?
              <a href='#' onClick={registerLink}>Register</a>
            </p>
          </div>

        </form>
      </div>


      <div className="form-box Register" >
        <form>
          <h1>REGISTER</h1>
          <div className='inputBox'>
            <input type="text"
                     placeholder="Username" />
                     <FaUser className='icons'/>
          </div>
          <div className='inputBox'>
            <input type="email"
                     placeholder="email" />
                     <MdEmail className='icons'/>
          </div>
          <div className='inputBox'>
            <input  type="password"
                     placeholder="password" />
                     <FaLock className='icons'/>
          </div>
          <div className='remember-forgot'>
            <label><input type="checkbox"
                    />Agree trems and conditions</label>
          </div>

          <button type='submit'>Register</button>
        
          <div className='Register-link'>
            <p>I Already have an account.
              <a href='#' onClick={loginLink}>Login</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}
export default LoginRegister;