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
    <div className="flex justify-center items-center my-28">
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
