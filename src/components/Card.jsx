import { useContext } from "react";
import Rating from "./Rating";
import CartContext from "../context/CartContext";

const Card = ({ item }) => {
    const { cart,addItem} = useContext(CartContext);
    console.log(cart);
    
  return (
    <div className="w-[200px] p-2 border rounded-xl">
      <img src={item.image} alt={item.title} className="w-[200px] h-[200px]" />
      <h3 className="text-md font-semibold line-clamp-1">{item.title}</h3>
      <Rating rating={item.rating.rate} />
      <p className="font-semibold">$ {item.price}</p>
      <p className="text-sm text-gray-700">{item.category}</p>
      <button 
      onClick={()=>addItem(item)}
      className="bg-stone-950 text-white py-2 rounded-xl px-3 mt-2">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
