import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLs } from "../Utilites/localstorage";

const Bottles = () => {
const [bottles , setBottles] = useState([])
const [cart , setCart] = useState([])
useEffect(()=>{
 fetch('bottles.json')
 .then(res=>res.json())
 .then(data =>setBottles(data))
})

const handleCart =(bottle)=>{
  const newCart  = [...cart , bottle]
  setCart(newCart)
  addToLs(bottle.name)
}
 
    return (
 <div>
     <h2>Bottles:{bottles.length} </h2> 
     <h3>cart:{cart.length} </h3>
     <h3>
        {
         bottles.map((bottle , idx)=> <Bottle key={idx} bottle={bottle} handleCart={handleCart}></Bottle>)
          
        }
        </h3>                                                                                   
 </div>
  );
};

export default Bottles;