
import React, { useState } from "react";

function Sales({ products, setProducts }) {
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sales, setSales] = useState([]);

  const handleBuy = () => {
    if (!selected) return alert("Select a product!");
    const index = products.findIndex(p => p.name === selected);
    if (products[index].quantity < quantity) return alert("Not enough stock!");
    
    const updatedProducts = [...products];
    updatedProducts[index].quantity -= quantity;
    setProducts(updatedProducts);

    setSales([...sales, { product: selected, quantity, amount: updatedProducts[index].price * quantity }]);
    setQuantity(1);
  };

  return (
    <div>
      <h1>Sales</h1>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select Product</option>
        {products.map(p => <option key={p.name} value={p.name}>{p.name} (Stock: {p.quantity})</option>)}
      </select>
      <input type="number" value={quantity} min="1" onChange={e => setQuantity(parseInt(e.target.value))} />
      <button onClick={handleBuy}>Buy</button>

      <table>
        <thead><tr><th>Product</th><th>Quantity</th><th>Amount</th></tr></thead>
        <tbody>
          {sales.map((s, i) => (
            <tr key={i}><td>{s.product}</td><td>{s.quantity}</td><td>{s.amount}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;
