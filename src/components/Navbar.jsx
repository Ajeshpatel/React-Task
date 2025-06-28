import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ named import
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cartCount = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
      <h2 className="text-xl font-bold text-green-600">Food App</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/cart")}
          className="relative bg-green-600 text-white px-4 py-2 rounded"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </button>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
