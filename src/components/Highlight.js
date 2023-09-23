import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import pancake from "../asset/pancake.png"
import pasta from "../asset/pasta.png"
import pizza from "../asset/pizza.png"
import chop from "../asset/chops.png"
import "./Highlight.css"
export default function Highlight(){
    return(<div className='pt-5 mt-3'>
       <div className='highlight'> 
       
       <div>
        <FontAwesomeIcon icon={faCertificate} className='fontawesome quality'/>
       <h3>Quality</h3>
        <p>We serve high quality meals </p>
        </div>

        <div>
            <FontAwesomeIcon icon={faSeedling} className='fontawesome leaf'/>
            <h3>Organic</h3>
            <p>our products are highly organic</p>
        </div>
        
        <div>
            <FontAwesomeIcon icon={faTruck} className='fontawesome truck' />
        <h3>Fast Delivery</h3>
        <p>We delivery very fast </p>
        </div>
       
       
        
        </div>
        <h2 className='favourites'>Our Favourites</h2>
        <div className='homepageimg'>
            
            <div>
                <img src={pancake}alt="pancake" className='pancake'/>
                <p>Pancakes</p>
            </div>
            <div>
                <img src= {pasta} alt="pasta"/>
                <p>Pasta</p>
            </div>
            <div>
                <img src={pizza}alt="pizza"/>
                <p>Pizza</p>
            </div>
            <div>
                <img src={chop}alt="chop" className='chop'/>
                <p>Chops</p>
            </div></div></div>
    )
}