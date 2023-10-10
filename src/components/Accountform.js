import React from'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Accountform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import googleimg from '../asset/googlelogo.png';
import quenchlogo from '../asset/quenchlogo.png';
import Spice from '../asset/spice.png';
import Ingredients from '../asset/foodingredients.png'

export default function Loginform(){
    
    return (
    <div >
        <div  className='d-flex justify-content-center Loginform'>
        
        <div className='accountForm'>
         <h1>Create Account</h1> 
          
          <form>

            <div className ='d-flex justify-content-evenly'>
            <FontAwesomeIcon icon={faUser} className='icons'/>
            <input type='text'placeholder='Username'className='value' />
            </div>
         
          <div className ='d-flex justify-content-evenly'>
            <FontAwesomeIcon icon={faEnvelope} className='icons'/>
          <input type = 'email'placeholder='Email'className='value' />
          </div>  

            <div className ='d-flex justify-content-evenly'>
                <FontAwesomeIcon icon={faLock}className='icons'/>
                <input type='password'placeholder='Password' className='value'/>
                </div>
          
           <div className ='d-flex justify-content-evenly'>
            <FontAwesomeIcon icon={faSquareCheck}className='icons'/>
            <input type='password' placeholder='Confirm Password'className='value'/>
            </div>
           
           <div className='d-flex justify-content-Center accountbtn'>
            <button className='createacct' id='homebtn' > 
            Create
             </button> 

            <button className='signUp'  id='homebtn'>
            Sign In
            </button>
            
            </div>
         
          </form>
         
          <p>Or Sign in with</p>
           <button className='googleBtn'>
            <img src={googleimg} alt='googlelogo' className='googleIcon'/>
            </button>
        </div>
       
       <div>
        <img src={quenchlogo} alt='quenchlogo' className='logoImg'/>
      <h3 className='tagLine'> The Spot for Satisfaction...!</h3>
      
      </div> 
      
      </div>
      
      <img src={Spice} alt='spices' className='bgImg'/>
      <img src={Ingredients} alt='ingredient' className='ingredients'/>
      
      </div>)
     
   
    
    
}
