import React, { useEffect, useState, useContext } from "react";
import Products from "./Products.json";
import AddedProducts from "./AddedProducts";
import PerProducts from "./PerProducts";
import FilterProduct from "../FilterProduct/FilterProduct";
import Login from "./Login";
import AuthContext from "./AuthContext";

function ProductList(props) {
let ctx = useContext(AuthContext)

  let [newProductList, updateNewProductList] = useState(Products);
  let [filterTextValue, updateFilterText] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
    if (filterTextValue === "available") {
      return product.availability === true;
    } else if (filterTextValue === "unavailable") {
      return product.availability === false;
    } else {
      return product;
    }
  });

  function createProduct(newProduct) {
    console.log(newProduct);
    newProduct.id = newProductList.length + 1;

    updateNewProductList([newProduct, ...newProductList]);
  }

  function addProductList(newProductList) {
    console.log(newProductList);
  }
  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);
  }

  // let [isLoggedIn, updateIsLoggedIn] = useState(false);


  // useEffect(() => {
  //   let isLoggedInValue = localStorage.getItem('isLoggedIn');
  //   if(isLoggedInValue ==='1') {
  //     updateIsLoggedIn(true)
  //   }
  // }, []);

  // function loginHandler(email, password,) {
  //   localStorage.setItem("isLoggedIn", "1");
  //   updateIsLoggedIn(false)
  // }

  // function logOutHandler() {
  //   localStorage.removeItem('isLoggedIn ');
  //   updateIsLoggedIn(true)
  // }

  

  

  return (
    <div className="container ">
      {ctx.isLoggedIn  && <Login ></Login>}

      {!ctx.isLoggedIn && (
        <AddedProducts
          createProduct={createProduct}
        ></AddedProducts>
      )}
      <FilterProduct
        filterValueSelected={onFilterValueSelected}
      ></FilterProduct>
      <PerProducts
        addProductList={addProductList}
        newProductList={filteredProductList}
      ></PerProducts>
    </div>
  );
}

export default ProductList;
