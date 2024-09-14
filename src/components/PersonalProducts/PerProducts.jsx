import React from "react";
import AddedProducts from "./AddedProducts";

function PerProducts() {
  return (
    <div className="container ">
      <AddedProducts></AddedProducts>
      <div 
      data-aos='fade-up'
      className="">
        <div className="border border-orange-900 my-10 gap-5 p-5">
          <div className="">
            <div className="sm:p-2">
              <img src="" alt="product image" />
            </div>
            <div className="sm:p-2">
              <h1 className="text-sm sm:text-xl font-bold">Fresh milk</h1>
            </div>
            <div className="sm:p-2"> 
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptatum minima numquam necessitatibus aspernatur ducimus
                aliquid qui accusantium recusandae delectus,
              </p>
            </div>
            <div className="flex px-1 py-5 sm:gap-5 sm:p-3 items-center justify-between sm:justify-start gap-2">
              <h1 className="sm:p-2 text-sm sm:text-xl font-bold">Price</h1>
              <button
                className="text-center w-12 flex items-center  cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
              >
                -
              </button>
              <h1 className="sm:p-2 text-sm sm:text-xl font-bold">Zero</h1>
              <button
                className="text-center w-12  flex items-center cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
              >
                +
              </button>
              <h1 className="border text-sm sm:text-xl font-bold bg-green-600 border-orange-900 px-4 py-1 rounded-xl">
                Available
              </h1>
            </div>
          </div>
          <button
            className="text-center text-sm sm:text-xl font-bold w-full  cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
          >
            Buy product
          </button>
        </div>
      </div>
    </div>
  );
}

export default PerProducts;
