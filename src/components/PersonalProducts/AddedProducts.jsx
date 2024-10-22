import React, { useContext, useState } from "react";
import Products from './Products.json'
import AuthContext, { AuthContextProvider } from "./AuthContext";

const onSubmit = () => {
  console.log();
};

function AddedProducts(props) {
   

  //let[pName, updateName] = useState('');
  //let[pDescription, updateDescription] = useState('');
  //let[pPrice, updatePrice] = useState('');
  //let[pImage, updateImage] = useState(''); 
  
  let [userInput, updateUserInput] = useState({
    pID:"",
    pName:"",
    pDescription:"",
    pPrice:"",
    pImage:"",
    pAvailability: "",
  })

  const nameInputHandler = (event) =>{
    //updateName(event.target.value)
   // updateUserInput({
     // ...userInput,
     // pName: event.target.value})
     updateUserInput((prevState)=>{
      return {...prevState, pName: event.target.value}
     })
  }

  const descriptionInputHandler =(event) =>{
    //updateDescription(event.target.value)
    //updateUserInput({
     // ...userInput,
      //pDescription: event.target.value})
      updateUserInput((prevState)=>{
        return {...prevState, pDescription: event.target.value}
       })
  }
  
  const priceInputHandler =(event) =>{
    //updatePrice(event.target.value)
    //updateUserInput({
     // ...userInput,
      //pPrice: event.target.value});
      //console.log(userInput)
      updateUserInput((prevState)=>{
        return {...prevState, pPrice: event.target.value}
       })
  }

  const imageInputHandler =(event) =>{
    //updateImage(event.target.value)
    //updateUserInput({
     // ...userInput,
     // pImage: event.target.value})
     updateUserInput((prevState)=>{
      return {...prevState, pImage: event.target.value}
     })
     console.log(userInput)
  }
  const availabilityHandler =(event)=>{
    updateUserInput((prevState)=>{
      return {...prevState, pAvailability: event.target.checked}
    })
    console.log(userInput.pAvailability)
  }
  // console.log(userInput)

  let ctx = useContext(AuthContext)

  function createProductEventHandler(event) {
    event.preventDefault();
    let newProduct = {
      id: userInput.pID,
      name: userInput.pName,
      description: userInput.pDescription,
      price: Number(userInput.pPrice),
      image: userInput.pImage,
      availability: Boolean(userInput.pAvailability)
    }
   // console.log(product)
  //  updateUserInput({
  //  pName:"",
   // pDescription:"",
   // pPrice:"",
   /// pImage:"",
    //})
    updateUserInput({
      pID:"",
      pName:"",
      pDescription:"",
      pPrice:"",
      pImage:"",
      pAvailability: ""
    });
    

   props.createProduct(newProduct);
   //props.hideList()
  }
   function createProduct(newProduct){
    console.log(newProduct)
    updateUserInput({
      pID:"",
      pName:"",
      pDescription:"",
      pPrice:"",
      pImage:"",
      pAvailability: "",
    });
   }
  

  return (
    <div >
      <form  onSubmit={createProductEventHandler}>
        <div 
        data-aos="fade-up"
        className="container shadow-xl border rounded-xl grid sm:grid-cols-2  border-orange-900 my-1 sm:my-2 gap-2 sm:gap-3 p-1 justify-around">
          <div className="p-1 ">
            <label className="text-xs sm:text-xl">Name of product</label>
            <input
              onChange={nameInputHandler}
              type="text"
              value={userInput.pName}
              placeholder="Name of product"
              className='sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div className="p-1">
            <label className="text-xs sm:text-xl">Description of product</label>
            <input
            onChange={descriptionInputHandler}
              type="text"
              value={userInput.pDescription}
              placeholder="Description of product"
              className='sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div className="p-1">
            <label className="text-xs sm:text-xl">Price of product</label>
            <input
            onChange={priceInputHandler}
              type="number"
              value={userInput.pPrice}
              placeholder="Price of product"
              className='sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div  className="p-1">
            <label className="text-xs sm:text-xl">Image of product</label>
            <input
              onChange={imageInputHandler}
              type="file"
              value={userInput.pImage}
              placeholder="Image of product"
              className='sm:w-full w-[100%] text-xs sm:text-xl rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800 dark:text-white'
            />
          </div>
          <div className="flex items-center justify-center gap-5">
            <label className="text-xs sm:text-xl">Availibility</label>
            <input
            role="switch"
            id="isAvailable" 
            value={userInput.pAvailability}
            onChange={availabilityHandler}
            className="sm:w-5 sm:h-5 w-4 h-4"
            type="checkbox"
           
            ></input>
          </div>
          <div className="p-1 gap-2">
            <button
            type="submit"
            //onClick={createProduct}
              className="text-center text-xs sm:text-xl w-full  cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
            >
              
              Add product
            </button>
            <button
            onClick={ctx.onLogout}
              className="text-center my-2  text-xs sm:text-xl w-full  cursor-pointer bg-orange-700 text-white
                    py-1 p-5 rounded-md"
            >
              
              Logout
            </button>
            
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default AddedProducts;
