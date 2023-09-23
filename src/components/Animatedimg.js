import React from "react";
import image from "../asset/grilledvegcapachio.png";
import friedrice from "../asset/applepecanchickensalad.png"
import spice from "../asset/spice.png"

import './Animatedimg.css'

export default function Animatedimg (){
    return(
    <div className="pt-5"> 
       <div><img src={friedrice}alt="classicslad" className="salad"/>
       <img src={spice}alt="spices" className="spices"/></div> 
     <img src={image} alt ="display" className="displayimg"/>
   
    </div>
)
}