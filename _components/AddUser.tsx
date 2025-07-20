"use client";

import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(`✅ User ${result.name} added!`);
      setName("");
      setEmail("");
    } else {
      setMessage(`❌ Failed: ${result.error || "Unknown error"}`);
    }

    setLoading(false);
  };

  return (
    <section className="border h-full p-2 max-w-md">
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !name || !email}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
      >
        {loading ? "Adding..." : "Add User"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </section>
  );
};

export default AddUser;
