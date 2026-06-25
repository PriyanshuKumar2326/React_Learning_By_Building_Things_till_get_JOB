import { prices } from "./coffeData";

export default function Card({ order }) {
  const { drink, size, milk, extras } = order;

  const drinkPrice = prices[drink];
  const sizePrice = prices[size];

  const extrasPrice = extras.reduce(
    (total, item) => total + prices[item],
    0
  );

  const totalPrice = drinkPrice + sizePrice + extrasPrice;

  return (
    <div className="w-full rounded-xl border border-stone-700 bg-stone-800 p-6 text-stone-100 shadow-xl">
      <h2 className="mb-6 border-b border-stone-700 pb-3 text-xl font-bold tracking-wide">
        ☕ YOUR ORDER
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="capitalize text-stone-300">{drink}</span>
          <span>${drinkPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="capitalize text-stone-300">{size}</span>
          <span>${sizePrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="capitalize text-stone-300">{milk}</span>
          <span>-</span>
        </div>

        {extras.length > 0 && (
          <>
            <hr className="border-stone-700" />

            {extras.map((item) => (
              <div key={item} className="flex justify-between">
                <span className="capitalize text-stone-300">
                  {item}
                </span>
                <span>${prices[item].toFixed(2)}</span>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-6 border-t border-stone-700 pt-4">
        <div className="flex justify-between text-lg font-bold text-amber-400">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}