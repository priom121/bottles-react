const storeCart =()=>{
 const storeCartString = localStorage.getItem('cart')
 if(storeCartString){
      return JSON.parse(storeCartString)
 }
 return []
}

const saveCartToLs = (cart) =>{
      const stringified = JSON.stringify(cart)
      localStorage.setItem('cart' , stringified)
}

const addToLs = (id) =>{
   const cart = storeCart()
   cart.push(id)
   saveCartToLs(cart)
}
export {addToLs , storeCart}