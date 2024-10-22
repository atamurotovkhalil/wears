import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { MainMenu } from "./components/MainSet/MainMenu";
import { Products } from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/Footer/Footer";
import { PopUp } from "./components/PopUp/PopUp";
import PerProducts from "./components/PersonalProducts/PerProducts";
import ProductList from "./components/PersonalProducts/ProductList";
import TopProducts from "./components/TopProducts/TopProducts";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Navbar handleOrderPopup={handleOrderPopup}></Navbar>
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
          <Route path="/toprated" element={<TopProducts />}></Route>
        </Routes>
        <Footer />
        <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </BrowserRouter>
    </div>
  );
};

export default App;
