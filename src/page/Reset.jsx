import { useState } from "react";
import { NavLink } from "react-router";
import { sendPasswordReset } from "../firebase";

const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Reset your password</h1>
      <div className="flex flex-col">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          required
        />
        <button
          onClick={() => sendPasswordReset(email)}
          className="bg-black text-white p-1 rounded-md m-auto"
        >
          Send password reset email
        </button>
        <p className="my-2">
          No Account?{" "}
          <NavLink to="/register" className="underline">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Reset;
