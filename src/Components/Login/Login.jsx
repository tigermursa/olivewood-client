import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import necessary Firebase authentication functions
import { AuthContext } from "../Provider/AuthProvider"; // Assuming you have your AuthContext defined

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(); // Get the Firebase auth instance
  const authContext = useContext(AuthContext); // You can use your AuthContext for other operations as well

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been successfully logged in.",
        });
        // You can also set user data in your AuthContext if needed
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-44">
      <h2 className="text-4xl font-bold pb-3">Sign in</h2>

      <div className="flex justify-center items-center shadow-xl">
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-6333618-5230178.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
