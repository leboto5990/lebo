import React from "react";

function Inventory({ products, setProducts }) {
  const handleRestock = (index) => {
    const amount = parseInt(prompt("Enter quantity to add:"));
    if (!amount || amount <= 0) return;
    const updated = [...products];
    updated[index].quantity += amount;
    setProducts(updated);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <table>
        <thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td style={{ color: p.quantity < 10 ? "red" : "green" }}>{p.quantity}</td>
              <td><button onClick={() => handleRestock(i)}>Restock</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
