import React from 'react';
import './Loginpageimage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faSeedling, faTruck } from '@fortawesome/free-solid-svg-icons';
import Frenchfries from '../asset/frenchfries.png'
import Pizza from '../asset/pizza.png'
import Jollof from '../asset/jollof.png'
import Pancake from '../asset/pancake.png'


export default function Loginpageimage(){
    return(
<div className='Loginpageimage'>

<div className='homefoodsimg'> 

<div className='Favourities'><h2>Our Favourites</h2></div>

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
    <p> meals are packged in healthy fancy plastic 
        plates for ease of delivery and we delivery
         within abuja with little token     </p>
    </div>
    
    </div> 
    </div> 
    </div>)
}