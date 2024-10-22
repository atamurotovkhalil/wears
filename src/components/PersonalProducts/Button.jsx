import React, {useState} from 'react'

function Button(props) {

    let [countProduct, setCountProduct] = useState(0);

    function displayFormattedProductCount() {
      return countProduct > 0 ? countProduct : "0";
    }
  
    let incrementProductPrice = function () {
      setCountProduct(++countProduct);
    };
  
    let decrementProductPrice = function () {
      setCountProduct(--countProduct);
    };
    //console.log(countProduct)
 
    return (<div className='flex items-center justify-between gap-0'>
        <button 
        disabled={countProduct <=0}
        className={countProduct <=0 ? `text-center w-10  flex items-center cursor-pointer bg-orange-500 text-white
                    py-1 p-4 rounded-md`: `text-center w-10  flex items-center cursor-pointer bg-orange-700 text-white
                    py-1 p-4 rounded-md` } onClick={decrementProductPrice}>-

        </button>
        <span className='sm:p-1 m-1 '>{displayFormattedProductCount()} x {props.price} = {displayFormattedProductCount()*props.price}$</span>
        <button 
        className="text-center w-10  flex items-center cursor-pointer bg-orange-700 text-white
                    py-1 p-4 rounded-md" onClick={incrementProductPrice}>+

        </button>
        </div>
  )
}

export default Button