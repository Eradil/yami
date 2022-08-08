import React, { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;