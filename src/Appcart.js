import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Cart from "./components/Cart";
import Amazon from "./components/Amazon";
import "./style/Amazon.css";

function Appcart (){
    const[show,setShow]=useState(true);
    const[cart,setCart]=useState([]);
    const[warnig,setwarning]=useState(false);


 
        const HandleClick = (item)=>{
            let isPresent = false;
            cart.forEach((product) =>{
            if (item.id === product.id)
            isPresent = true;
            })
            if (isPresent){
                setwarning(true);
                setTimeout(()=>{
                    setwarning(false);
                },2000);

                return ;
            }
            
            setCart([...cart, item]);
    }
    const HandleChange=(item,d)=>{
        let ind= -1;
        cart.forEach((data,index)=>{
            if(data.id===item.id)
            ind =index;
        });
        const temparr=cart;
        temparr[ind].amount +=d;


        if(temparr[ind]. amount ===0)
        temparr[ind].amount=1;
    setCart([...temparr])
    }



    return(
        <>
       
       <React.Fragment>
        <Navbar size={cart.length}  setShow={setShow}/>
        {
            show ? <Amazon HandleClick={HandleClick}/> : <Cart cart={cart} setCart={setCart} HandleChange={HandleChange }/>
        }
        {
            warnig && <div className="Warning">item is already added to your cart</div>
        }
       </React.Fragment>
        
        </>
    )
}
export default Appcart;