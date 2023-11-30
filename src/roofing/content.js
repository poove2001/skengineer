import React from "react";
import img1 from "./image/t1.jpg"
import img2 from "./image/t2.jpg"
import img3 from "./image/t3.jpg"
import img4 from "./image/t4.jpg"
import img5 from    "./image/tata1.jpg"
import img6 from    "./image/aditybrila.jpg"
import img7 from    "./image/mecto.jpg"
import img8 from    "./image/tanisk.jpg"
import img9 from    "./image/sast.jpg"
import img10 from   "./image/royal steels.jpg"

function Service(){
    return(
        <>
        <div id="scroll">
            <div className="content">
                    <h1>Our Best Products</h1>
                    <p className="line"></p>
                    <h4>State of Art Manufaturing</h4>
            </div>
            <div id="imgtxt">
            <div className="im" >
                 <img  src={img1}/>
                 <div className="img1"></div>
                 <span id="txtimg1" >Trapezoidal RoofingSheet</span>
            </div>


            <div className="im" ><img src={img2}/>
            <div className="img2"></div>
            <span id="txtimg2">Strutural Decking</span></div>

            <div className="im" ><img src={img3}/>
            <div className="img3"></div>
                <span id="txtimg3">Purlins</span></div>

            <div className="im" ><img src={img4}/>
          
            <div className="img4"></div>
            
            <span id="txtimg4">MetalBuilding Accessories</span></div>
            </div>

            <div className="line2">
                <h2>We Are Associated With International Brands</h2>
                <p className="lineline1"></p>
                <p className="lineline2"></p>
            </div>

            <div className="companylogo">
            <div id="companys1line">
                <div className="logo">
                    <img src={img5} />
                    <div>
                        <h4>Tata BluesCope Steel</h4>
                    </div>
                </div>
                <div className="logo">
                    <img src={img6}  />
                    <div>
                        <h4>AdityaBirla</h4>
                    </div>
                </div>
                <div className="logo">
                    <img src={img7} />
                    <div>
                        <h4>Metco</h4>
                    </div>
                </div>
                
            </div>
            <div id="companys2line">
                <div className="logo2">
                    <img src={img8} />
                    <div>
                        <h4>TANISK</h4>
                    </div>
                </div>
                <div className="logo2">
                    <img src={img9} />
                    <div>
                        <h4>SAST</h4>
                    </div>
                </div>
                <div className="logo2">
                    <img src={img10} />
                    <div>
                        <h4>RoyalSteels</h4>
                    </div>
                </div>
                
            </div>

            </div>

          

        </div>
        
        </>
    )
}

export default Service;