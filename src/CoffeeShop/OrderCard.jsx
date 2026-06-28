export default function OrderCard({ item }) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow">
      <h2 className="text-xl font-semibold">{item.drink}</h2>

      <p>
        <strong>Size:</strong> {item.size}
      </p>

      <p>
        <strong>Milk:</strong> {item.milk}
      </p>

      <p>
        <strong>Extras:</strong>{" "}
        {item.extras.length > 0
          ? item.extras.join(", ")
          : "No Extras"}
      </p>

      <p>
        <strong>Quantity:</strong> {item.count}
      </p>
    </div>
  );
}