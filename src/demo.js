import  React from 'react';
import { Output } from './link';



function Login(){
    return(
     
    <>
    <Output/>
    <div id='login'>
        <h2>LoginForm</h2>
      <div id='n1'>
    <label>Name:</label>
    <input type='text' placeholder=''/>
    </div> 
    <div id='p'>
        <label>password:</label>
    <input type='text' placeholder=''/>
    </div>
    <button type='text' >register</button>
    </div>
   <Form/>
     </>
  
);}

function Form(){
  return(
    <>
    <div id='head'>
      <h2>BuyApp</h2>
      <ul id='ul'>
        <li>home</li>
        <li>Details</li>
        <li>login</li>
        <li>help us</li>
      </ul>
    </div>

    </>
  )
}
    
    


export default Login;