import React, { useEffect, useState } from "react";
import "../style/cart.css"

function Cart({cart, setCart , HandleChange}){
    const [price,setPrice]=useState(0);


    const HandlePrice=()=>{
        let ans=0;
        cart.map((item)=>{
            ans +=item.amount *item.price
        })
        setPrice(ans);
    }
    const HandleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id !==id);
        setCart(arr);
        // HandlePrice();
    }


    useEffect(()=>{
        HandlePrice();
    })
    return(
        <>
        <article>
            {
                cart?.map((item)=>(
                   
                        <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                        </div>
                        <div>
                        <button onClick={()=>HandleChange(item,+1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={()=>HandleChange(item,-1)}>-</button>
                        </div>
                        <div>
                        <span>{item.price}</span>
                        <button onClick={()=>HandleRemove(item.id)}>Remove</button>
                        </div>
                        </div>
))}
                        <div className="total">
                        <span>Total Price of your Cart</span>
                        <span>Rs - {price}</span>
                        </div>  
        
        </article>
        
        </>
    )
}

export default Cart;