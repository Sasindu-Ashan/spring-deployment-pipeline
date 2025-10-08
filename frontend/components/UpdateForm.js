"use client";
import { useState } from "react";

export default function UpdateForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/v1/customer/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: parseInt(id),        
          customerName: name,              // ✅ send name
          customerAddress: address,        // ✅ send address
        }),
      });

      if (!response.ok) {
        throw new Error(`Update failed with status ${response.status}`);
      }

      const result = await response.text(); 
      setMessage(result);

      // Reset form
      setId("");
      setName("");
      setAddress("");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="font-bold mb-2">Update Customer</h2>
      <form onSubmit={handleUpdate}>
        <input
          className="border p-2 mr-2"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Customer ID"
          required
        />
        <input
          className="border p-2 mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Name"
          required
        />
        <input
          className="border p-2 mr-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="New Address"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
      {message && <p className="mt-2 text-blue-300">{message}</p>}
    </div>
  );
}
