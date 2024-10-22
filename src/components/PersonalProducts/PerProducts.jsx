import React, { useState, useContext } from "react";
import Button from "./Button";
import { BiSolidLike } from "react-icons/bi";
import Likes from "./likes";
import AuthContext from "./AuthContext";

function PerProducts(props) {
  // let [countProduct, setCountProduct] = useState(0);

  // function displayFormattedProductCount() {
  //   return countProduct > 0 ? countProduct : "Zero";
  // }

  // let incrementProductPrice = function () {
  //   setCountProduct(++countProduct);
  // };

  // let decrementProductPrice = function () {
  //   setCountProduct(--countProduct);
  // };
  // console.log(countProduct)

  //  let[newProductList, updateNewProductList] = useState([])
  //   updateNewProductList(newProductList)
  //console.log(props.newProductList)
let context = useContext(AuthContext);
 

  return props.newProductList?.length === 0? <h3> No products available </h3> :
  ( <ul  className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      {props.newProductList?.map((product) => (
        <li key={product?.id}
            className='list-none'>
              <div
                 data-aos="fade-up"
                 className=" gap-1    "
        >
          <div 
          className={product?.availability === false?  "border dark:bg-slate-600 bg-[#dedede] shadow-2xl rounded-xl border-orange-900 my-2 gap-1 p-3" : "hover:scale-95 duration-200 border shadow-2xl rounded-xl border-orange-900 my-2 gap-1 p-3" }>
            
              <div className="p-1 sm:p-2 flex justify-start">
                <img
                  src={product?.image}
                  className="sm:w-50 sm:h-50 w-40 h-40"
                  alt="product image"
                />
              </div>
              <div className=" p-1 sm:p-2">
                <h1 className="text-xs sm:text-xl font-bold">
                  {product?.name}
                </h1>
              </div>
              <div className="p-1 text-xs sm:text-xl  sm:p-2">
                <p>{product?.description}</p>
              </div>
              <div className="flex px-1 py-1 sm:gap-1 sm:p-1 items-center justify-between sm:justify-start gap-1">
                <h1 className="p-1 sm:p-2 text-xs sm:text-xl font-bold">
                  {product?.price}$
                </h1>
                <Button price={product.price}></Button>
                <h1
                  className={
                    product?.availability === true
                      ? `bg-green-600 border  text-xs sm:text-xl font-bold    
                  border-orange-900 px-4 py-1 rounded-xl`
                      : `bg-red-600 border  text-sm sm:text-xl font-bold    
                  border-orange-900 px-4 py-1 rounded-xl`
                  }
                >
                  {product?.availability === true ? "Available" : "Sold"}
                </h1>
                <Likes ></Likes>
                
              </div>
            <button
              className="text-center text-xs sm:text-xl font-bold w-full  cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
            >
              Buy product
            </button>
          </div>
        </div>
       </li> ))}
    </ul>
  );
}

export default PerProducts;
