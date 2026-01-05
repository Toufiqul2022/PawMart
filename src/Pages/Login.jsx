import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/api";

const Login = () => {
  const { setUser, handleGoogleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (!email) return toast.warning("Please enter your email");
    if (!password) return toast.warning("Please enter your password");

    signInWithEmailAndPassword(auth, email.trim(), password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Ensure user exists in MongoDB
        api
          .post("/users", {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
          .catch(console.log);

        toast.success("Login Successful!", { autoClose: 1500 });
        setTimeout(() => {
          navigate(location.state || "/");
        }, 1500);
      })
      .catch((error) => toast.error(error.message));
  };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);

        api
          .post("/users", {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
          .catch(console.log);

        toast.success("Google Login Successful!", { autoClose: 1500 });
        setTimeout(() => {
          navigate(location.state || "/");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 px-5 md:px-10 py-10 overflow-hidden">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
        </div>
        <div className="card bg-base-100 shadow-2xl rounded-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label mt-3">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <div className="mt-2 text-right">
                  <button
                    type="button"
                    onClick={handleForget}
                    className="link link-hover text-sm"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="button"
                  onClick={googleSignIn}
                  className="btn btn-outline mt-4 w-full flex items-center justify-center gap-2"
                >
                  <span className="text-[16px]">Sign In with</span> <FcGoogle />
                </button>

                <Link
                  to="/register"
                  className="block mt-4 text-center text-sm text-gray-600 hover:text-blue-600"
                >
                  New here? <span className="text-blue-600">Register</span>
                </Link>

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
