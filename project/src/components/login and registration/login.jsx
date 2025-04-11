import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './login.css'

 function login() {
  return (
    <div className='wrapper'>
      <div className="login">
        <form>
          <h1>LOGIN</h1>
          <div className='inputBox'>
            <input type="text"
                     placeholder="Username" className='inputclass'/>
                     <FaUser />
          </div>
          <div className='inputBox'>
            <input className='inputclass' type="password"
                     placeholder="password" />
                     <FaLock />
          </div>
          

          <button type='submit'className='submit'>Login</button>
          <div className='rember forgot'>
            <label><input type="checkbox"
                    />Remember Me</label>
                    <a href="#">  forgot password</a>
          </div>
          <div className='forgot'>
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