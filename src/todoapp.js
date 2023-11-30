import React,{useState} from "react";
import'./demo.css';



function Todoapp(){


const [newItem, setnewItem]=useState('');
const [items, setItems]=useState([]);

  function addItem(){

if(!newItem){
  alert("enter an item");
  return;
}


    const Item={
        id:Math.floor(Math.random()*1000),
        value:newItem
    };

   setItems(oldList=>[...oldList, Item]);
   setnewItem("");
   
  } 
  function deleteItem(id){
    const newArray=items.filter(Item=>Item.id !==id);
    setItems(newArray);
  }
   return(
    
<>
<div id="contain">
<h1>Todo List</h1>            


<input
type="text"
placeholder="Enter a item ..."
value={newItem}
onChange={e=> setnewItem(e.target.value)}
/>

<button  onClick={()=> addItem()}>ADD</button>
<ul>
  
    {items.map(Item=>{
    return(
      <li key={Item.id}>{Item.value} <button  className="b1"onClick={()=>deleteItem(Item.id)}>Delete</button></li>
      
      )
   })}
</ul>
</div>
</>    
);
}

export  {Todoapp};