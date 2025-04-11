import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './login.css'

 function login() {
  return (
    <div className='wrapper'>
      <div className="form-box login">
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
              <a href='#'>Register</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}
export default login;