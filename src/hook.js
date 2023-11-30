import React,{useState} from "react";



function Usestate(){

const [data, setdata]=useState(0);



let change=()=>{
    console.log("hello");

    setdata(data+1);
}
let cle=()=>{
    setdata(data-1)
}


    return(
<>
<p>usestate</p>
<h1> {data} </h1>
<button onClick={change}>increase</button>
<button onClick={cle}>decrease</button>

</>

    );
}



export { Usestate };