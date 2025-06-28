import { createContext, useState } from "react";

// ✅ Named export
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // ✅ Add to Cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev[item.name];
      if (existing) {
        return {
          ...prev,
          [item.name]: { ...item, quantity: existing.quantity + 1 },
        };
      }
      return {
        ...prev,
        [item.name]: { ...item, quantity: 1 },
      };
    });
  };

  // ✅ Decrease Qty
  const decreaseQty = (item) => {
    setCartItems((prev) => {
      const existing = prev[item.name];
      if (existing && existing.quantity > 1) {
        return {
          ...prev,
          [item.name]: { ...item, quantity: existing.quantity - 1 },
        };
      } else {
        const updated = { ...prev };
        delete updated[item.name];
        return updated;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Default export
export default CartProvider;
