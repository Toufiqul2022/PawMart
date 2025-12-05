import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const { registerWithEmailPassword, setUser, handleGoogleSignIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const PhotoUrl = e.target.PhotoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;

    if (password.length < 6) {
      return toast.warning("Password must be at least 6 characters");
    }
    if (!uppercase.test(password)) {
      return toast.warning("Password must contain an uppercase letter");
    }
    if (!lowercase.test(password)) {
      return toast.warning("Password must contain a lowercase letter");
    }
    if (!number.test(password)) {
      return toast.warning("Password must contain a lowercase letter");
    }

    registerWithEmailPassword(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: PhotoUrl,
        })
          .then(() => {
            setUser(result.user);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const googleSignUp = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
    toast.success("Signed in with Google!");
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-2xl shadow-2xl">
          <ToastContainer />
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  className="input"
                  name="PhotoUrl"
                  placeholder="PhotoURL"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={googleSignUp}
                  className="btn text-2xl mt-2"
                >
                  <span className="text-[16px]">Sign In with</span> <FcGoogle />
                </button>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <Link to="/login">
                  Already have an account?
                  <span className="text-blue-600"> Login</span>
                </Link>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
