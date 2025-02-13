import { createContext, useState } from "react";

const CartContext = createContext();



function CartContextProvider({children}){
    const [cart,setCart] = useState([]);

    const addItem = (product)=>{
        setCart((prev)=>[...prev,{...product,quantity:1}])
    }
    const removeItem =(id)=>{
        setCart((prev)=>prev.filter(item=>item.id!==id));
    }
    const incrementQuantity = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };

      const decrementQuantity = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };

      const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
      const valueToShare = {
        cart,
        setCart,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      };


    return <CartContext.Provider value={valueToShare}>
        {children}
    </CartContext.Provider>

}

export {CartContextProvider}
export default CartContext;