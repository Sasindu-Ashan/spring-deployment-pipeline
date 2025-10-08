"use client";
import { useState } from "react";

export default function SearchForm() {
  const [id, setId] = useState("");
  const [customer, setCustomer] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8081/api/v1/customer/search/${id}`);
      if (res.ok) {
        setCustomer(await res.json());
      } else {
        setCustomer(null);
      }
    } catch (error) {
      console.error("Error fetching customer:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <h2 className="font-bold mb-2 text-white">Search Customer</h2>
        <input
          className="border p-2 mr-2 bg-transparent text-white outline-none"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Customer ID"
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {customer && (
        <div className="p-0 m-0 bg-transparent">
          <p className="text-white text-lg"><strong>ID:</strong> {customer.customerId}</p>
          <p className="text-white text-lg"><strong>Name:</strong> {customer.customerName}</p>
          <p className="text-white text-lg"><strong>Address:</strong> {customer.customerAddress}</p>
          <p className="text-white text-lg"><strong>Contact Number:</strong> {customer.contactNumber}</p>
          <p className="text-white text-lg"><strong>Salary:</strong> {customer.customerSalary}</p>
        </div>
      )}
    </div>
  );
}
