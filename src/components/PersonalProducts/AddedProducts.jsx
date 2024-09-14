import React from "react";

const onSubmit = () => {
  console.log();
};

function AddedProducts() {
  return (
    <div >
      <form onSubmit={onSubmit}>
        <div 
        data-aos="fade-up"
        className="container border grid sm:grid-cols-2  border-orange-900 my-10 gap-5 p-5 justify-around">
          <div className="p-2 ">
            <label>Name of product</label>
            <input
              type="text"
              placeholder="Name of product"
              className='sm:w-full w-[100%] rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div className="p-2">
            <label>Description of product</label>
            <input
              type="text"
              placeholder="Description of product"
              className='sm:w-full w-[100%] rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div className="p-2">
            <label>Price of product</label>
            <input
              type="number"
              placeholder="Price of product"
              className='sm:w-full w-[100%] rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div  className="p-2">
            <label>Photo of product</label>
            <input
              type="file"
              placeholder="Photo of product"
              className='sm:w-full w-[100%] rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div className="p-2">
            <button
              className="text-center w-full  cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
            >
              Add product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddedProducts;
