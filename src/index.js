import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Appcart from './Appcart';
import Roofing from './roofing/Roofing';

// import Reducer_1 from './reducer';
// import { Parent } from './router';
// import Todoapp from './todoapp';
// import {Usestate} from './hook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Roofing/>



    {/* <Appcart/> */}
    {/* <Navbar/> */}
    {/* <Todoapp/> */}
   {/* <Usestate/> */}
  {/* <Parent/> */}
  {/* <Reducer_1/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
