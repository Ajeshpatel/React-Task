import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import FoodItems from "./pages/FoodItems";
import ProtectedRoute from "./routes/ProtectedRoute";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/food"
        element={
          <ProtectedRoute>
            <FoodItems />
          </ProtectedRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
