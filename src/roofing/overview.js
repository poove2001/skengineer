import React from "react";
import img1 from "./image/establish.jpg"
import img2 from "./image/houseroofimage.png"
import img3 from "./image/industryroofimage.jpg"
import img4  from "./image/comercialroofingimage.jfif"

function Overview(){
    return(
        <>
        <div id="container_2">

            <div id="establish">
                <h2 className="h2">S.K ENGINEERS<span> is</span> </h2>
                <p>India's Largest roofing provider</p>
            </div>
            <div className="estapara">
                <h4> <img src={img1}/>Our Company is a Wide Range of Products for Metal Building Solutions like Purlins,
                 Steel Decking and Metal Roofing/Cladding Material. 
                Roofing has been one of our Prominent areas of Expertise and with our Compelling Services, 
                we’re known as one of the best Roofing Sheet Manufacturers and Roofing sheet suppliers.
                In addition, metal Roofing sheets have gained momentum over the years and being prominent metal roofing manufacturers, 
                we ensure to deliver the finest quality. <br/>Our sophisticated infrastructure and technical expertise,
                 backed by the experience of over 20 years in the Industrial construction and
                  Architectural field reflect our strict adherence to industry standards and quality control guidelines. 
                Our potent manufacturing unit and diligent workforce ensure that the products we offer are impeccable and sturdy.
                We always strive to keep investing in new manufacturing techniques.<br/>
                Excellence is the benchmark of our products & services. 
                We have a reputation of delivering our products and services as per
                 commitment owing to our highly experienced and well-organized management team.
                Customers appreciate the quality of our products in respect to its characteristics such as weather-resistant,
                 ease of installation, corrosion-resistant and long life.</h4>
            </div>
            <div className="icon-box">
            <div id="icons">
                <div>
            <i class="fa-solid fa-trophy" ></i><h3>Certified Company</h3></div>
            <div><i class="fa-solid fa-mug-hot"></i>
            <h3>20 Years Experience</h3></div>
            <div><i class="fa-solid fa-people-carry-box"></i>
            <h3>Innovative Work</h3></div>
            </div>
            </div>
            <div id="project">
                <h2>Our Projects</h2>
                <p></p>
            </div>
            <div id="project_content">
            <div>
                <img src={img2}/>
                <div><h4>HOUSE ROOFING</h4></div>
              
            </div>
            <div>
                <img src={img3}/>
                <div><h4>INDUSTRY ROOFING</h4></div>
              
            </div>
            <div>
                <img src={img4}/>
                <div><h4>COMERCIAL ROOFING</h4></div>
              
            </div>
            </div>
            <div id="bgimage">

                <div className="bgicon">
                <div id="bgtext">
                <div><i class="fa-regular fa-face-smile"></i></div>
                <div><h3>20000+</h3></div>
                <div><p>Successful Projects</p></div>
                </div>

                <div id="bgtext">
                <div><i class="fa-solid fa-people-roof"></i></div>
                <div><h3>700+</h3></div>
                <div><p>Happy Customers</p></div>
                </div>

                <div id="bgtext">
                <div><i class="fa-regular fa-copy"></i></div>
                <div><h3>300+</h3></div>
                <div><p>Team Members</p></div>
                </div>
                </div>

                <div className="bgicon2">
                <div><i class="fa-solid fa-medal"></i></div>
                <div><h3>50+</h3></div>
                <div><p>Awards Won</p></div>

                </div>

             </div>
















        </div>
        
        
        
        
        
        </>
    )
}
export default Overview;