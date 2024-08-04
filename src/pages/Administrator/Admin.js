import React, { useState } from "react";
import axios from "axios";
import InputLogin from "../../component/molecules/InputLogin";
import DAbtn02 from "../../component/atom/DAbtn02";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      // Handle successful login
      console.log("Login successful:", response.data);
      // For example, store the token in localStorage
      localStorage.setItem("token", response.data.token);
      // Redirect to another page if needed
      // window.location.href = "/somepage";
    } catch (error) {
      // Handle errors
      setError(error.response?.data?.error || "An error occurred");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mt-10 bg-[#FF7777] bg-opacity-35 p-6 w-[50%] mx-auto squada-one-regular text-white rounded-xl shadow-2xl">
      <h1>Welcome to Admin Page</h1>
      <h4>Please Login to Introduce Yourself</h4>
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
        <DAbtn02 location="/Setting" label={"Pergi"} onClick={()=>{handleLogin()}} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Admin;
