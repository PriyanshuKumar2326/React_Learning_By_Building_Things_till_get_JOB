import { useLocation } from "react-router-dom";
import OrderCard from "./OrderCard";

export default function Order() {
  const location = useLocation();

  const cart = location.state?.cart || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <OrderCard
            key={item._id || item.id || index}
            item={item}
          />
        ))
      )}
    </div>
  );
}