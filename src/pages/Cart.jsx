import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cartItems, addToCart, decreaseQty } = useContext(CartContext);
  const navigate = useNavigate();

  const total = Object.values(cartItems).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/thankyou");
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

        {Object.keys(cartItems).length === 0 ? (
          <p className="text-gray-600">Cart is empty.</p>
        ) : (
          <>
            {Object.values(cartItems).map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center justify-between p-4 bg-white rounded shadow mb-4"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-6 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
