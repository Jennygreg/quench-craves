import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import "./Highlight.css"
export default function Highlight(){
    return(<div>
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
    </div>)
}