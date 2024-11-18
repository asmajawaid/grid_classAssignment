import Grid from "@/components/Grid";
import Header from "@/components/Header";

import Position from "../app/position/page";

export default function Home() {
  return (
    <>
      <Grid />
      {/* <div className="grid grid-cols-3 grid-rows-[100px_200px_200px_200px_200px_100px] gap-3 p-3 text-center border-2 border-yellow-300">
      <div className="bg-slate-600 col-span-3 border-2 content-center border-red-950 font-bold text-[36px]">1</div>
      <div className="bg-slate-600 row-span-3">2</div>
      <div className="bg-slate-600 col-span-2">3</div>
      <div className="bg-slate-600 row-span-3">2</div>
      <div className="bg-slate-600 col-span-2 row-span-2">3</div>
      <div className="bg-slate-600 col-span-3 border-2 content-center border-red-950 font-bold text-[36px]">1</div>
    </div> */}
      <Header />
      <Position />
    </>
  );
}
