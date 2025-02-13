import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Header = () => {
  const {cart} = useContext(CartContext);
  const itemNumber = cart.length
  return (
    <div className="bg-stone-950 text-white p-4 border-b-1 border-stone-900">
        <nav className="flex justify-between max-w-3xl font-semibold mx-auto">
            <div className="flex gap-4 items-center text-3xl">
            <MdShoppingBasket /><span><Link to="/" className="cursor-pointer">Inventory</Link></span>
            </div>
            <div className="flex gap-4 items-center text-md">
                
                <Link to="/cart" className="flex items-center gap-2 border py-1 px-2 rounded-2xl"><FaShoppingCart /> Cart <p className="bg-white text-blue-700 rounded-full px-2">{itemNumber}</p></Link>
            </div>
        </nav>
    </div>
  )
}

export default Header