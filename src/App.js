import { createContext, useState } from "react";
import React, { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

export const SearchContext = createContext();
const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
