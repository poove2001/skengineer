import React from "react";
import { useReducer } from "react";

const transaction=(action,state)=>{
    switch(action.type){
        case 'withdraw':
            return state - action.payload

        case 'deposit':
            return state + action.payload
            default:
                return state
    }
}

export default function Reducer_1(){
    
    

    const withdraw =(amount) =>{  
        dispatch=({type:'withdraw',payload:amount})
    }
    const deposit  =(amount) =>{
        dispatch=({type:'deposit',payload:amount})
    }

  



    const [state,dispatch]=useReducer(transaction,1000)

    return(
        <>
        <h1>{`Bank Trans ${state}`}</h1>
        <button onClick={()=>withdraw(500)}>withdraw</button>
        <button onClick={()=>deposit(500)}>deposit</button>
        </>
    );
}

