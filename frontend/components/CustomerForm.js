"use client";
import { useState } from "react";

export default function CustomerForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8081/api/v1/customer/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customerName: name, customerAddress: address, customerSalary: salary, contactNumber }),
    });
    setName("");
    setAddress("");
    setSalary("");
    setContactNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400 border-b pb-2">
        ➕ Add Customer
      </h2>

      <input
        className="w-full border border-gray-600 rounded-lg p-2 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Customer Name"
        required
      />
      <input
        className="w-full border border-gray-600 rounded-lg p-2 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Customer Address"
        required
      />
      <input
        type="number"
        className="w-full border border-gray-600 rounded-lg p-2 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        placeholder="Contact Number"
        required
      />
      <input
        type="number"
        className="w-full border border-gray-600 rounded-lg p-2 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
        required
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-900 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Save Customer
      </button>
    </form>
  );
}
