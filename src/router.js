import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Output } from "./link";
import Login from "./demo";




function Parent(){
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Output/>}/>
        <Route path="/home" element={<Login/>}/>
        <Route path="/product" element={<Output/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export{Parent};