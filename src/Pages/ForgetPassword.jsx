import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const { email } = useParams();

  const handleReset = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;

    sendPasswordResetEmail(auth, Email)
      .then(() => {
        toast.success(`Password Reset Successfully`);
        window.open("https://mail.google.com/mail/u/0/#inbox");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center my-28  bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleReset} className="fieldset">
            <label className="label">Email</label>
            <input
              defaultValue={email}
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
