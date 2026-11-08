import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSocialLogin = async () => {
    try {
      const user = await signInWithGoogle();

      console.log(user);
      navigate("/home");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Login</h1>
      <form action="" className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
            required
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleLogin}
            className="bg-black text-white p-1 rounded-md m-auto mx-2"
          >
            Login
          </button>
          <button
            onClick={handleSocialLogin}
            className="bg-blue-500 text-white p-1 rounded-md m-auto"
          >
            Login with Google
          </button>
        </div>

        <p className="my-2">
          No Account?{" "}
          <NavLink to="/register" className="underline">
            Register
          </NavLink>
        </p>

        <p className="my-2">
          Forgot Password?{" "}
          <NavLink to="/reset" className="underline">
            Reset
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
