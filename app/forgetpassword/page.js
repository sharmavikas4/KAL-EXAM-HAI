"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase-config";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submit = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email sent,check your inbox");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col gap-4 border-2 border-[#ccc] shadow-[0px_4px_8px_rgb(180,180,180)] rounded-3xl p-6 sm:p-10">
        <div className="flex flex-col gap-2 place-content-start">
          <h1 className="font-semibold text-2xl sm:text-4xl">
            Forget Password
          </h1>
        </div>
        <form
          className="flex flex-col gap-6 sm:gap-8"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <input
            type="email"
            disabled={isSubmitted}
            className="focus:outline-none border-[#ccc] border-2 rounded-xl h-12 sm:w-[30vw] sm:h-16 shadow-[0px_2px_8px_rgb(180,180,180)] px-4 py-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <button
            type="submit"
            className="sm:w-[30vw] sm:h-16 h-12 text-white rounded-xl px-4 py-3 bg-[#0016DF]"
            disabled={isSubmitted}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
