import './bottle.css'
const Bottle = ({bottle , handleCart}) => {
const {name,description,price} =bottle
return (
 <div className="container">
     <h3>Bottle : {name}</h3>
     <h3>Description : {description}</h3> 
     <p>price: {price}</p>  
     <button onClick={handleCart}>Purchase</button>                                                                                 
  </div>
 );
};

export default Bottle;