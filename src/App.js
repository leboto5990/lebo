
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import Inventory from "./components/Inventory";
import Customer from "./components/Customer";
import Reporting from "./components/Reporting";
import ProductManagement from "./components/ProductManagement";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [sales, setSales] = useState([]);

  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <header className="topbar">
            <p>Wings Cafe</p>
            <div className="top-buttons">
              <button>Dashboard</button>
              <button>Sales</button>
              <button>Inventory</button>
              <button>Reporting</button>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales sales={sales} setSales={setSales} products={products} />} />
            <Route path="/inventory" element={<Inventory products={products} setProducts={setProducts} />} />
            <Route path="/customer" element={<Customer customers={customers} setCustomers={setCustomers} />} />
            <Route
              path="/reporting"
              element={<Reporting products={products} customers={customers} sales={sales} />}
            />
            <Route
              path="/ProductManagement"
              element={<ProductManagement products={products} setProducts={setProducts} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
