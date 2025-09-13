
import React, { useState } from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", category: "", price: "", quantity: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = { ...form, price: parseFloat(form.price), quantity: parseInt(form.quantity) };
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, { ...form, price: parseFloat(form.price), quantity: parseInt(form.quantity) }]);
    }
    setForm({ name: "", description: "", category: "", price: "", quantity: "" });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  return (
    <div>
      <h1>Product Management</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <table>
        <thead>
          <tr><th>Name</th><th>Description</th><th>Category</th><th>Price</th><th>Quantity</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
