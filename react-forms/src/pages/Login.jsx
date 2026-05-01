import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h1>Login to my App</h1>

      <form
        onSubmit={handleLogin}
        className="mx-auto my-[3rem] bg-blue-200 w-[300px] p-5 rounded-md"
      >
        <div className="flex flex-col my-4">
          <label htmlFor="username" className="w-full">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-2 rounded-3xl bg-gray-100"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="p-2 rounded-3xl bg-gray-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mx-auto block bg-blue-800 text-white px-4 py-2 rounded-3xl pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
