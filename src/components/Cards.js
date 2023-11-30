import React from "react";
import "../style/Cards.css"


function Cards({item, HandleClick}){
    const {title, author, price, img}=item;



    return(
        <>
        <div className="cards">
            <div className="image_box">
            <img src={img} alt="Image"/>
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>price-{price}Rs</p>
                <button onClick={()=>HandleClick(item)}>Add to cart</button>
                
            </div>
        </div>        
        
        </>
    )
}
export default Cards;