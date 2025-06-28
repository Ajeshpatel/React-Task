import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";

const FoodItems = () => {
  const [items, setItems] = useState([]);
  const { cartItems, addToCart, decreaseQty } = useContext(CartContext);

  useEffect(() => {
    fetch("/data/feeds.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch feeds.json");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading food items:", err.message));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const cartItem = cartItems[item.name];
          return (
            <div
              key={`${item.name}-${index}`}
              className="bg-white p-4 rounded shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  −
                </button>
                <span>{cartItem?.quantity || 0}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
