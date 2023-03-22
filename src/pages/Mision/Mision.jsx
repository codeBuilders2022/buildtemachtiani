import React from "react";
import Banner from "../../data/banner.png";
import { MisionVision } from "../../data/dummy";

const Mision = () => {
  return (
    <>
      <div className="flex justify-center mt-14 md:mt-10">
        <img src={Banner} alt="Banner" width={800} />
      </div>
      <div className=" dark:bg-gray-600 dark:text-white m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <MisionVision />
      </div>
    </>
  );
};

export default Mision;
