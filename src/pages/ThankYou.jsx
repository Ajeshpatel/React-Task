import Navbar from "../components/Navbar";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[80vh] text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600">
          Your order has been placed successfully.
        </p>
      </div>
    </>
  );
};

export default ThankYou;
