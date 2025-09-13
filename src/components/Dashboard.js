
import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Here is a quick overview:</p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
          <h3>Total Sales</h3>
          <p>M 120,000</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
          <h3>Total Inventory</h3>
          <p>350 Items</p>
        </div>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
          <h3>Total Customers</h3>
          <p>75 Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
