"use client";
import { useState } from "react";
import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { login } from "../redux/features/Login/loginSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const submit = async () => {
    setIsSubmitted(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setIsSubmitted(false);
        dispatch(login());
        router.push("/");
      })
      .catch((err) => {
        console.log(err.code);
        setError(true);
        setMessage(err.message);
        setIsSubmitted(false);
      });
  };
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col gap-4 border-2 border-[#ccc] shadow-[0px_4px_8px_rgb(180,180,180)] rounded-3xl p-6 sm:p-10">
        <div className="flex flex-col gap-2 place-content-start">
          <h1 className="font-semibold text-2xl sm:text-4xl">Login</h1>
          <h3 className="text-lg sm:text-2xl">to help others</h3>
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            type="password"
            value={password}
            disabled={isSubmitted}
            className="focus:outline-none border-[#ccc] border-2 rounded-xl h-12 sm:w-[30vw] sm:h-16 shadow-[0px_2px_8px_rgb(180,180,180)] px-4 py-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <a
            onClick={() => {
              router.push("/forgetpassword");
            }}
          >
            Forgot Password?
          </a>
          <button
            type="submit"
            className="sm:w-[30vw] sm:h-16 h-12 text-white rounded-xl px-4 py-3 bg-[#0016DF]"
            disabled={isSubmitted}
          >
            Continue
          </button>
          {error && <p className="text-red-500">{message}</p>}
        </form>
        <div className="flex place-content-center">
          <h3>
            New User?
            <a
              className="font-semibold"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Register
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Login;
