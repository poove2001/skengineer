// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

// Link,BrowserRouter,Routes,Route

function Output(){
    return(
        <>
        <div>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/product">product</Link></li>
        </div>
        
        
        </>
    )
}

export {Output};