import React from 'react';
import Calculator from '../src/components/Calculator/calculator.jsx';
import LoginRegister from './components/login and registration/login.jsx';
import './apps.css';


function App() {
  return (
    <div className='containerAll'>
      <Calculator /> 
      <LoginRegister />
    </div>
  );
}

export default App;
