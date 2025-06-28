import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Welcome to Our Food App!
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Click below to explore our delicious menu.
      </p>
      <button
        onClick={() => navigate("/food")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Food Items
      </button>
    </div>
  );
};

export default Menu;
