import React from "react";

import img from './image/tittleimage2.jpg';
function Top(){
    return(
        <>
         <div id="container">
            <div id="head">
                <img src={img}/>


            <div className="ul">
                <ul id="contain">
                <li>Home</li>   
                <li>About Us</li>   
                <li>Product
                    <ul id="drop">
                        <li>Sheet</li>
                        <li>Tubes</li>
                        <li>Shutter</li>
                        <li>Louvers</li>
                        <li>Ventilators</li>
                        <li>Sections</li>
                        <li>Stripes</li>
                        <li>Roofing Accessories</li>
                </ul>
                </li>
              <li>Color Range</li>   
                <li>Specification</li>   
                <li>Clients</li>   
                <li>Conduct Us </li>   
                </ul>
            </div>
            </div>




            <div id="anime">
                <div className="text">
                <h1>We Manufaturing<br/>Industrial steel<br/>Roof Top Sheet </h1>
                <p>We Offer the Most Complete Industrial Solutions in this Country,<br/>for the Research, Design and Development of Materials</p>
                <button className="b1">Learn More</button>
                <button className="b2">Our Solutions</button>
                </div>           
                
            </div>
              </div>
        
        
       
       
        
        
        
        
        </>
    )
}
export default Top;