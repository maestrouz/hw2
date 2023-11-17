import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Carts from "./Carts";
import { useGlobalContext } from "./context";
import router from "./components/CB";
import { About, Service, Home, Contact } from "./pages";

function App() {
  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <h2>All product {amount}</h2>

        <Carts />
        <p className="total">Total price {total}</p>
        <button className="clear" onClick={() => clearCart()}>
          CLEAR
        </button>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
