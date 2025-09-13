import React from "react";

function Reporting({ products = [], customers = [], sales = [] }) {
  // Using default empty arrays to avoid undefined errors
  return (
    <div>
      <h1>Reporting</h1>
      <p>Total Products: {products.length}</p>
      <p>Total Customers: {customers.length}</p>
      <p>Total Sales: {sales.length}</p>
      <p>Total Sales Amount: M {sales.reduce((sum, s) => sum + (s.amount || 0), 0)}</p>
    </div>
  );
}

export default Reporting;
