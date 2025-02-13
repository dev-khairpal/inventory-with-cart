import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { incrementQuantity, cart, decrementQuantity } = useContext(CartContext);

  return (
    <div className="flex justify-center py-12 bg-gray-50">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Your Cart</h2>
        <div>
          {cart.length === 0 ? (
            <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[100px] h-[100px] object-cover rounded-md shadow-sm"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="font-semibold text-gray-800">$ {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center border rounded-lg p-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-neutral-900 text-white rounded-full"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <p className="mx-4 text-lg font-semibold">{item.quantity}</p>
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-neutral-900 text-white rounded-full"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-semibold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            <Link to="/thankyou">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
