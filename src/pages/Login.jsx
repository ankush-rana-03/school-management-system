import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("Principal");

  const handleLogin = () => {
    alert(`Logging in as ${role}`);
    // Redirect to /home or based on role
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">School Login</h2>
        
        <select
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Principal">Principal</option>
          <option value="Teacher">Teacher</option>
          <option value="Parent">Parent</option>
        </select>

        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Login as {role}
        </button>
      </div>
    </div>
  );
}