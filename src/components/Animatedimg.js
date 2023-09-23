import React from "react";
import image from "../asset/orderimg.png";

import './Animatedimg.css'

export default function Animatedimg (){
    return(
    <div> 
     <img src={image} alt ="display" className="displayimg"/>
   
    </div>
)
}