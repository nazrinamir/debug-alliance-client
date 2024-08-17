import React, { useState } from "react";
import axios from "axios";
import DAbtn02 from "../../component/atom/DAbtn02";
import InputLogin from "../../component/molecules/InputLogin";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    // Validate input fields
    if (!username || !password) {
      setError("Username and password cannot be empty.");
      return; // Stop execution if fields are empty
    }

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      // Handle successful login
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      // Redirect to the desired location
      window.location.href = "/Setting"; // Redirect to the desired location
    } catch (error) {
      setError(
        error.response?.data?.error || "An error occurred during login."
      );
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mt-10 bg-[#ffd006] backdrop-blur-sm bg-opacity-20 p-6 w-[50%] mx-auto squada-one-regular text-white rounded-xl shadow-2xl">
      <div className="text-center">
        <h1>Welcome to Admin Page</h1>
        <h4>Please Login to Introduce Yourself</h4>
      </div>
      <div className="h-full w-full mx-auto my-10 md:text-xl">
        <div className="flex flex-col p-2 w-[60%] mx-auto gap-y-4">
          <InputLogin
            type={2}
            label={"username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputLogin
            type={1}
            label={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <DAbtn02 label={"Pergi"} onClick={handleLogin} />
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Admin;
