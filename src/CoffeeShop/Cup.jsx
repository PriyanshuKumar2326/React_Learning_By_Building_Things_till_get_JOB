import {drinkColours,sizeHeight} from "./coffeData"
export default function Cup({order}) {
  // Change these dynamically later

  const fillColor = drinkColours[order.drink];
const fillHeight = sizeHeight[order.size];

  return (
    <section className="flex flex-1 flex-col items-center gap-8 pt-4">
      {/* Cup Scene */}
      <div className="relative flex flex-col items-center">
        {/* Badges */}
        <div className="absolute -top-2.5 -right-10 flex flex-col gap-1.5">
          {/* Remove hidden when you want to show */}
          <div className="hidden h-[30px] w-[30px] items-center justify-center rounded-full bg-green-500 text-white text-sm shadow-lg">
            ✓
          </div>

          <div className="hidden h-[30px] w-[30px] items-center justify-center rounded-full bg-red-500 text-white text-sm shadow-lg">
            ✕
          </div>
        </div>

        {/* Cup */}
        <div className="relative h-[210px] w-[180px] overflow-hidden rounded-[10px_10px_40px_40px] border-[3px] border-stone-700 bg-stone-300 shadow-[0_10px_25px_rgba(0,0,0,0.35),inset_0_-6px_16px_rgba(0,0,0,0.3)]">

          {/* Liquid */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-[0_0_37px_37px] transition-all duration-300"
            style={{
              height: fillHeight,
              backgroundColor: fillColor,
            }}
          >
            {/* Liquid top highlight */}
            <div className="absolute left-0 right-0 top-0 h-[14px] rounded-[50%_50%_0_0/7px_7px_0_0] bg-white/20"></div>
          </div>

          {/* Cup shine */}
          <div className="pointer-events-none absolute left-[16px] top-[10px] h-[70px] w-[16px] -rotate-[8deg] rounded-[12px] bg-white/10"></div>

          {/* Cup Handle */}
         
        </div>
          <div className="absolute right-[-28px] top-[55px] h-[65px] w-[34px] rounded-r-[32px] border-[8px] border-l-0 border-stone-700"></div>
        {/* Cup Base */}
        <div className="h-[12px] w-[210px] rounded-[0_0_50px_50px] border-x-[2px] border-b-[2px] border-stone-700 bg-stone-700 shadow-[0_6px_18px_rgba(0,0,0,0.4)]"></div>
      </div>
    </section>
  );
}