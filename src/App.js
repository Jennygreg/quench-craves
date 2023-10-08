import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faCertificate, faLock, faSeedling, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import googleimg from './asset/googlelogo.png';
import quenchlogo from './asset/quenchlogo.png'
import Frenchfries from './asset/frenchfries.png'
import Pizza from './asset/pizza.png'
import Jollof from './asset/jollof.png'
import Pancake from './asset/pancake.png'
import Spice from './asset/spice.png'
function App() {
return <div>
  <Navbar/>
  <div  className='d-flex justify-content-center'>
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
 <div><img src={quenchlogo} alt={quenchlogo} className='logoImg'/>
<h3 className='tagLine'> The Spot for Satisfaction...!</h3></div> 

</div>
<img src={Spice} alt='spices' className='bgImg'/>
<div className='homefoodsimg'> <div className='Favourities'><h2>Our Favourites</h2></div>
<img src={Frenchfries} alt='frenchfries' className='foodimg fries'/>
<img src={Pizza} alt='pizza' className='foodimg '/>
<img src={Jollof} alt='jollofrice' className='foodimg'/>
<img src={Pancake} alt='pancake' className='foodimg'/>
</div>
<div className=' infoWrapper'>
 <div className='wrapper'><div className='info quality'>
 <FontAwesomeIcon icon={faCertificate} className='infoicon iconquality'/>
 <h3>Quality</h3>
    <p> we offer quality meals that supercede your expectation </p>
    </div>
    <div className='info organic'>
    <FontAwesomeIcon icon={faSeedling} className='infoicon iconseedlings'/>
    <h3>Organic</h3>
    <p> our dishes are made from pure and healthy organic products  </p>
    </div>
    <div className='info truck'>
    <FontAwesomeIcon icon={faTruck} className='infoicon icontruck'/>
    <h3>Fast Delivery</h3>
    <p> meals are packged in healthy fancy plastic plates for ease of delivery and we delivery within abuja with little token     </p>
    </div></div> 
    </div>
</div>


 
}

export default App;
