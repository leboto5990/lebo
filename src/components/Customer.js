import React, { useState } from "react";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", num: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = (e) => {
    e.preventDefault();
    setCustomers([...customers, { ...form, id: Date.now() }]);
    setForm({ name: "", email: "", num: "" });
  };
  const handleDelete = (id) => setCustomers(customers.filter(c => c.id !== id));

  return (
    <div>
      <h1>Customers</h1>
      <form onSubmit={handleAdd}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="num" placeholder="Phone" value={form.num} onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {customers.map(c => (
          <li key={c.id}>
            {c.name} - {c.email} - {c.num}
            <button onClick={() => handleDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customer;
