import { useState } from "react";
import Cup from "./Cup";
import MenuList from "./MenuList";
import Card from "./Card";

export default function Sidebar() {
  const [order, setOrder] = useState({
    drink: "espresso",
    size: "small",
    milk: "regular",
    extras: [],
  });
  let menu = ["espresso", "latte", "cappuccino", "matcha", "chai"];
  let SizeDrink = ["small", "medium", "large"];
  let Milk = ["regular", "oats", "almond", "soy", "no milk"];
  let Extras = ["extrashot", "vanilla", "caramel", "whipped"];
  // function chooseDrink(e) {}

  console.log(order);
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-10 bg-stone-900 px-6 py-8">
        <div className="flex-[0_0_250px] rounded-sm border bg-[#292524] p-6 flex flex-col gap-7">
          <MenuList
            title="Drink"
            data={menu}
            selectedValue={order.drink}
            setSelectedValue={(value) =>
              setOrder((prev) => ({ ...prev, drink: value }))
            }
          />
          <MenuList
            title="Size"
            data={SizeDrink}
            selectedValue={order.size}
            setSelectedValue={(value) =>
              setOrder((prev) => ({ ...prev, size: value }))
            }
          />
          <MenuList
            title="Milk"
            data={Milk}
            selectedValue={order.milk}
            setSelectedValue={(value) =>
              setOrder((prev) => ({ ...prev, milk: value }))
            }
          />
          <div>
            <h2 className="text-white mb-2">Extras</h2>

            <div className="flex flex-col gap-2">
              {Extras.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={order.extras.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setOrder((prev) => ({
                          ...prev,
                          extras: [...prev.extras, item],
                        }));
                      } else {
                        setOrder((prev) => ({
                          ...prev,
                          extras: prev.extras.filter((extra) => extra !== item),
                        }));
                      }
                    }}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Cup order={order} />
          <Card order={order}/>
        </div>
      </div>
    </>
  );
}
