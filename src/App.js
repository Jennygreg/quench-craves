import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import googleimg from './asset/googlelogo.png'

function App() {
return <div>
  <Navbar/>
  <div className='accountForm'>
   <h1>Create Account</h1> 
    <form>
      <dvi className ='d-flex justify-content-evenly'><FontAwesomeIcon icon={faUser} className='icons'/><input type='text'placeholder='Username'className='input' /></dvi>
    <div className ='d-flex justify-content-evenly'><FontAwesomeIcon icon={faEnvelope} className='icons'/><input type = 'email'placeholder='Email'className='input' /></div>  
      <div className ='d-flex justify-content-evenly'><FontAwesomeIcon icon={faLock}className='icons'/><input type='password'placeholder='Password' className='input'/></div>
     <div className ='d-flex justify-content-evenly'><FontAwesomeIcon icon={faSquareCheck}className='icons'/><input type='password' placeholder='Confirm Password'className='input'/></div>
     <div className='d-flex justify-content-Center accountbtn'><button className='createacct' id='homebtn'> Create </button> 
      <button className='signUp'  id='homebtn'>Sign In</button></div>
    </form>
    <p>Or Sign in with</p>
     <button className='googleBtn'><img src={googleimg} alt='googlelogo' className='googleIcon'/></button>
  </div>
  </div>

 
}

export default App;
