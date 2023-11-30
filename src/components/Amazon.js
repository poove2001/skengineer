import React from "react";
import List from "../cart";

import Cards  from "./Cards";

function Amazon({HandleClick}){
    return( 
        <>
        <section>
        {
            List.map((item)=>(
                <Cards item={item} key={item.id} HandleClick={HandleClick}/>
            ))
        }

        </section>
        
        </>
    )
}

export default Amazon;