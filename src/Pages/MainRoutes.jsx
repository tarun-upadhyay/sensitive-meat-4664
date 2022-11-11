import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Detail from "./Detail";
import Homepage from "./Homepage";
import Register from "./Login/Signup";
import Payment from "./Payment";
import Product from "./Product";
import Admin from "../Admin/Admin";
import AddProduct from "../Admin/AddProduct";
import Manage from "../Admin/Manage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="login"  element={<Register/>}/>
      <Route path="/admin" element={<Admin />}>
        {" "}
      </Route>
      <Route path="/admin/addproduct" element={<AddProduct/>}></Route>
     <Route path="/admin/manage" element={<Manage/>}></Route>
    <Route path="*" element={<h1> 404 Page Not Found</h1>}></Route>
    </Routes>
  );
};

export default MainRoutes;
