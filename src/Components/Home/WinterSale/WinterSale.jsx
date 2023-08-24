import React from "react";
import HotProducts from "../HotProducts/HotProducts";
import CountdownTimer from "./CountdownTimer";

const WinterSale = () => {
  return (
    <div className=" mx-auto  flex justify-center items-center p-10 mt-10 mb-20 pc-width">
      <div className="flex  flex-col justify-center items-center">
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/995/364/original/winter-animals-clipart-animals-merry-christmas-png.png"
            alt=""
            className="w-52 p-1"
          />
          <p className="text-2xl">Winter Sale</p>
          <p className="text-2xl font-extrabold">Up to 40% Off</p>
          <div>
            <CountdownTimer />
          </div>
        </div>
        <div className="">
          <HotProducts />
        </div>
      </div>
    </div>
  );
};

export default WinterSale;
