import React from "react";
import HotProducts from "../HotProducts/HotProducts";
import CountdownTimer from "./CountdownTimer";

const WinterSale = () => {
  return (
    <div className=" mx-auto  flex justify-center items-center p-10 mt-20 mb-20">
      <div className="flex justify-center items-center">
        <div>
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
        <div>
          <HotProducts />
        </div>
      </div>
    </div>
  );
};

export default WinterSale;
