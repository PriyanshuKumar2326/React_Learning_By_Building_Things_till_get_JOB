import { useNavigate } from "react-router-dom";

export default function Navbar({ cart }) {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b border-stone-700 bg-stone-900 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-extrabold tracking-wide text-amber-400">
          ☕ Coffee Shop
        </h1>

        <nav>
          <ul className="flex items-center gap-8 text-stone-300">
            <li>
              <button className="transition-colors hover:text-amber-400">
                Menu
              </button>
            </li>

            <li>
              <button
                onClick={() =>
                  navigate("/cart", {
                    state: { cart },
                  })
                }
                className="transition-colors hover:text-amber-400"
              >
                {cart.length > 0 ? `Order ${cart.length}` : "Order"}
              </button>
            </li>

            <li>
              <button className="transition-colors hover:text-amber-400">
                About
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}