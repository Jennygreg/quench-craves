import react from "react"
import quenchvideo from "./asset/quenchvideo.mp4"
import "./Video.css"
export default function Player (){
   
    
    return(<div>
        <video src={quenchvideo}  controls={false} loop
  muted autoPlay={true}
   className="homepagevid"/>
        
    </div>

    );
}